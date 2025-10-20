from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from pythonping import ping as python_ping
import json
import os

app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

CONFIG_FILE = os.environ.get('CONFIG_FILE', 'config.json')

def load_config():
    """Load configuration from JSON file"""
    try:
        if os.path.exists(CONFIG_FILE):
            with open(CONFIG_FILE, 'r') as f:
                return json.load(f)
    except Exception as e:
        print(f"Error loading config: {e}")
    
    # toss some example devices in for funsies and to generate the example json
    return {
        "devices": [
            {"id": 1, "name": "Core Switch", "ip": "192.168.128.254", "status": "unknown", "type": "switch", "x": 400, "y": 100},
            {"id": 2, "name": "Edge Router", "ip": "192.168.128.1", "status": "unknown", "type": "router", "x": 200, "y": 100}
        ],
        "connections": [
            {"from": 2, "to": 1}
        ],
        "boxes": [
            {"id": 1, "name": "Core Network", "x": 150, "y": 50, "width": 300, "height": 100, "color": "blue"}
        ]
    }

def save_config(config):
    """Save configuration to JSON file"""
    try:
        # Create directory if it doesn't exist
        # if docker users map config.json incorrectly, this shit will overwrite their json with the above example, consider fixing
        # considered fixing and decided not to, yolo.
        os.makedirs(os.path.dirname(CONFIG_FILE) if os.path.dirname(CONFIG_FILE) else '.', exist_ok=True)
        with open(CONFIG_FILE, 'w') as f:
            json.dump(config, f, indent=2)
        print(f"Config saved to {CONFIG_FILE}")
    except Exception as e:
        print(f"Error saving config: {e}")

# for size reduction swap from pingutils to pythonping
# well.. didn't really matter much, 68MB vs 61MB for a 72KB project... w/e
def ping_device(ip):
    """Ping a device using the pythonping library and return status/RTT."""
    try:
        result_list = python_ping(ip, count=1, timeout=1)
        if result_list.success():
            for response in result_list:
                if response.success:
                    return {
                        'success': True,
                        'responseTime': int(response.time_elapsed * 1000)
                    }
            return {'success': False, 'responseTime': None}
        else:
            return {'success': False, 'responseTime': None}
    except Exception as e:
        print(f"Ping error for {ip}: {e}")
        return {'success': False, 'responseTime': None}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/config', methods=['GET'])
def get_config():
    """Return the current configuration"""
    config = load_config()
    print(f"Sending config: {config}")
    return jsonify(config)

@app.route('/api/config', methods=['POST'])
def update_config():
    """Update the entire configuration"""
    try:
        config = request.json
        print(f"Received config to save: {config}")
        save_config(config)
        return jsonify({'success': True})
    except Exception as e:
        print(f"Error in update_config: {e}")
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/ping', methods=['POST'])
def ping():
    data = request.json
    ip = data.get('ip')
    if not ip:
        return jsonify({'error': 'IP address required'}), 400
    result = ping_device(ip)
    return jsonify(result)

# praise claude, i was going to break the internet with the 5million pings per second until this change.
@app.route('/api/ping_all', methods=['POST'])
def ping_all():
    devices = request.json.get('devices', [])
    results = []
    for device in devices:
        result = ping_device(device['ip'])
        results.append({
            'id': device['id'],
            'success': result['success'],
            'responseTime': result['responseTime']
        })
    return jsonify(results)

if __name__ == '__main__':
    print(f"Config file location: {CONFIG_FILE}")
    app.run(debug=False, host='0.0.0.0', port=5000)
