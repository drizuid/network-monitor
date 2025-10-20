const { useState, useEffect } = React;

// Simple SVG icon components
const ServerIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
}, 
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z'
  })
);

const RouterIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
},
  React.createElement('circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }),
  React.createElement('line', {
    x1: '7',
    y1: '7',
    x2: '17',
    y2: '17',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }),
  React.createElement('line', {
    x1: '17',
    y1: '7',
    x2: '7',
    y2: '17',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })
);

const SwitchIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
},
  React.createElement('rect', {
    x: '4',  // 4+
    y: '4',  // 4+
    width: '16', // 4-20
    height: '16', // 4-20
    rx: '2',
    ry: '2'
  }),
  React.createElement('path', {
    d: 'M7 9 L17 9',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }),
  React.createElement('path', {
    d: 'M17 15 L7 15',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })
);

const WifiIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
},
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z'
  })
);

const StorageIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
},
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
  })
);

const PlusIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
},
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M12 4.5v15m7.5-7.5h-15'
  })
);

const XIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
},
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M6 18L18 6M6 6l12 12'
  })
);

const LinkIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
},
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
  })
);

const MonitorIcon = (props) => React.createElement('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: props.strokeWidth || 1.5,
  stroke: 'currentColor',
  width: props.size || 24,
  height: props.size || 24,
  className: props.className
},
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
  })
);

const NetworkMonitor = () => {
  // State declarations
  const [devices, setDevices] = useState([]);
  const [connections, setConnections] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [draggedDevice, setDraggedDevice] = useState(null);
  const [draggedBox, setDraggedBox] = useState(null);
  const [resizingBox, setResizingBox] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [showAddBox, setShowAddBox] = useState(false);
  const [connectMode, setConnectMode] = useState(false);
  const [connectFrom, setConnectFrom] = useState(null);
  const [newDevice, setNewDevice] = useState({ name: '', ip: '', type: 'router' });
  const [newBox, setNewBox] = useState({ name: '', color: 'blue' });

  // Zoom and pan states
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  
  // Multi-select states
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionBox, setSelectionBox] = useState({ startX: 0, startY: 0, endX: 0, endY: 0 });
  const [selectedDevices, setSelectedDevices] = useState(new Set());
  const [isDraggingGroup, setIsDraggingGroup] = useState(false);
  const [groupDragStart, setGroupDragStart] = useState({ x: 0, y: 0 });

  const devicesRef = React.useRef(devices);

  // Load configuration on mount
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/api/config');
        const config = await response.json();
        setDevices(config.devices || []);
        setConnections(config.connections || []);
        setBoxes(config.boxes || []);
        setZoom(config.zoom || 1);
        setPanOffset(config.panOffset || { x: 0, y: 0 });
      } catch (error) {
        console.error('Failed to load config:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadConfig();
  }, []);

  // Update the ref whenever devices change
  useEffect(() => {
    devicesRef.current = devices;
  }, [devices]);

  // Save configuration
  useEffect(() => {
    if (!isLoading && devices.length >= 0) {
      const saveConfig = async () => {
        try {
          await fetch('/api/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ devices, connections, boxes, zoom, panOffset })
          });
        } catch (error) {
          console.error('Failed to save config:', error);
        }
      };
      const timeoutId = setTimeout(saveConfig, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [devices, connections, boxes, isLoading, zoom, panOffset]);

  const pingDevice = async (ip) => {
    try {
      const response = await fetch('/api/ping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip })
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Ping failed:', error);
      return false;
    }
  };

  // Check devices every 30 seconds
  useEffect(() => {
    if (!isLoading) {
      const checkDevices = async () => {
        const currentDevices = devicesRef.current;
        if (currentDevices.length === 0) return;

        const results = await Promise.all(
          currentDevices.map(async (device) => {
            const status = (await pingDevice(device.ip)) ? 'up' : 'down';
            return { ...device, status };
          })
        );
        setDevices(results);
      };

      checkDevices();
      const interval = setInterval(checkDevices, 30000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const getDeviceIcon = (type) => {
    switch(type) {
      case 'router': return RouterIcon;
      case 'server': return ServerIcon;
      case 'switch': return SwitchIcon;
      case 'wifi': return WifiIcon;
      case 'storage': return StorageIcon;
      // forgot end-user device, dont forget to add it
      case 'monitor': return MonitorIcon;
      default: return MonitorIcon;
    }
  };

  // Zoom handler
  const handleWheel = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY * -0.001;
      const newZoom = Math.min(Math.max(0.1, zoom + delta), 3);
      setZoom(newZoom);
    }
  };

  // Canvas interaction handlers
  const handleCanvasMouseDown = (e) => {
    const canvas = document.getElementById('canvas-container');
    const rect = canvas.getBoundingClientRect();
    
    if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
      e.preventDefault();
      setIsPanning(true);
      setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    } else if (e.button === 0 && e.ctrlKey && !connectMode) {
      e.preventDefault();
      const x = (e.clientX - rect.left - panOffset.x) / zoom;
      const y = (e.clientY - rect.top - panOffset.y) / zoom;
      setIsSelecting(true);
      setSelectionBox({ startX: x, startY: y, endX: x, endY: y });
    } else if (e.button === 0 && !e.ctrlKey && !e.shiftKey) {
      setSelectedDevices(new Set());
    }
  };

  const handleCanvasMouseMove = (e) => {
    if (isPanning) {
      setPanOffset({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      });
    } else if (isSelecting) {
      const canvas = document.getElementById('canvas-container');
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - panOffset.x) / zoom;
      const y = (e.clientY - rect.top - panOffset.y) / zoom;
      setSelectionBox(prev => ({ ...prev, endX: x, endY: y }));
    } else if (isDraggingGroup && selectedDevices.size > 0) {
      const dx = e.clientX - groupDragStart.x;
      const dy = e.clientY - groupDragStart.y;
      
      setDevices(prevDevices => prevDevices.map(d => {
        if (selectedDevices.has(d.id)) {
          return { ...d, x: d.x + dx / zoom, y: d.y + dy / zoom };
        }
        return d;
      }));
      
      setGroupDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleCanvasMouseUp = () => {
    if (isPanning) {
      setIsPanning(false);
    } else if (isSelecting) {
      setIsSelecting(false);
      
      const minX = Math.min(selectionBox.startX, selectionBox.endX);
      const maxX = Math.max(selectionBox.startX, selectionBox.endX);
      const minY = Math.min(selectionBox.startY, selectionBox.endY);
      const maxY = Math.max(selectionBox.startY, selectionBox.endY);
      
      const selected = new Set();
      devices.forEach(device => {
        const deviceCenterX = device.x + 60;
        const deviceCenterY = device.y + 48;
        if (deviceCenterX >= minX && deviceCenterX <= maxX && 
            deviceCenterY >= minY && deviceCenterY <= maxY) {
          selected.add(device.id);
        }
      });
      
      setSelectedDevices(selected);
    } else if (isDraggingGroup) {
      setIsDraggingGroup(false);
    }
  };

  const handleDeviceMouseDown = (e, device) => {
    if (e.button !== 0 || connectMode) return;
    e.preventDefault();
    e.stopPropagation();

    if (selectedDevices.has(device.id) && selectedDevices.size > 1) {
      setIsDraggingGroup(true);
      setGroupDragStart({ x: e.clientX, y: e.clientY });
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      setDraggedDevice(device.id);
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setSelectedDevices(new Set());
    }
  };

  const handleBoxMouseDown = (e, box) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    setDraggedBox(box.id);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    const rect = container.getBoundingClientRect();

    if (draggedDevice !== null) {
      const newX = (e.clientX - rect.left - offset.x - panOffset.x) / zoom;
      const newY = (e.clientY - rect.top - offset.y - panOffset.y) / zoom;

      setDevices(prevDevices => prevDevices.map(d =>
        d.id === draggedDevice ? { ...d, x: Math.max(0, newX), y: Math.max(0, newY) } : d
      ));
    }

    if (draggedBox !== null) {
      const newX = (e.clientX - rect.left - offset.x - panOffset.x) / zoom;
      const newY = (e.clientY - rect.top - offset.y - panOffset.y) / zoom;

      setBoxes(prevBoxes => prevBoxes.map(b =>
        b.id === draggedBox ? { ...b, x: Math.max(0, newX), y: Math.max(0, newY) } : b
      ));
    }

    if (resizingBox !== null) {
      setBoxes(prevBoxes => {
        const box = prevBoxes.find(b => b.id === resizingBox);
        if (!box) return prevBoxes;
        const newWidth = Math.max(100, (e.clientX - rect.left - panOffset.x) / zoom - box.x);
        const newHeight = Math.max(80, (e.clientY - rect.top - panOffset.y) / zoom - box.y);

        return prevBoxes.map(b =>
          b.id === resizingBox ? { ...b, width: newWidth, height: newHeight } : b
        );
      });
    }
  };

  const handleMouseUp = () => {
    setDraggedDevice(null);
    setDraggedBox(null);
    setResizingBox(null);
  };

  const handleDeviceClick = (deviceId) => {
    if (!connectMode) return;

    if (connectFrom === null) {
      setConnectFrom(deviceId);
    } else {
      if (connectFrom !== deviceId) {
        setConnections(prev => [...prev, { from: connectFrom, to: deviceId }]);
      }
      setConnectFrom(null);
      setConnectMode(false);
    }
  };

  const addDevice = () => {
    if (newDevice.name && newDevice.ip) {
      setDevices(prev => [...prev, {
        id: prev.length > 0 ? Math.max(...prev.map(d => d.id)) + 1 : 1,
        name: newDevice.name,
        ip: newDevice.ip,
        type: newDevice.type,
        status: 'unknown',
        x: 100,
        y: 100
      }]);
      setNewDevice({ name: '', ip: '', type: 'router' });
      setShowAddDevice(false);
    }
  };

  const addBox = () => {
    if (newBox.name) {
      setBoxes(prev => [...prev, {
        id: prev.length > 0 ? Math.max(...prev.map(b => b.id)) + 1 : 1,
        name: newBox.name,
        color: newBox.color,
        x: 50,
        y: 50,
        width: 300,
        height: 200
      }]);
      setNewBox({ name: '', color: 'blue' });
      setShowAddBox(false);
    }
  };

  const removeDevice = (id) => {
    setDevices(prev => prev.filter(d => d.id !== id));
    setConnections(prev => prev.filter(c => c.from !== id && c.to !== id));
    setSelectedDevices(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const removeBox = (id) => {
    setBoxes(prev => prev.filter(b => b.id !== id));
  };

  const removeConnection = (index) => {
    setConnections(prev => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (draggedDevice !== null || draggedBox !== null || resizingBox !== null) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedDevice, draggedBox, resizingBox, offset, zoom, panOffset]);

  const getDeviceCenter = (deviceId) => {
    const device = devices.find(d => d.id === deviceId);
    if (!device) return { x: 0, y: 0 };
    return { x: device.x + 60, y: device.y + 48 };
  };

  const boxColors = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    purple: 'border-purple-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
    orange: 'border-orange-500'
  };

  if (isLoading) {
    return React.createElement('div', {
      className: 'min-h-screen bg-gray-900 flex items-center justify-center'
    }, React.createElement('div', {
      className: 'text-white text-xl'
    }, 'Loading configuration...'));
  }

  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gray-900' },
    React.createElement(
      'div',
      { className: 'bg-gray-800 border-b-2 border-gray-700 p-4 flex items-center justify-between' },
      React.createElement('h1', { className: 'text-2xl font-bold text-white' }, 'Network Status Monitor'),
      React.createElement(
        'div',
        { className: 'flex gap-2' },
        React.createElement(
          'button',
          {
            onClick: () => {
              setConnectMode(!connectMode);
              setConnectFrom(null);
            },
            className: `${connectMode ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded flex items-center gap-2`
          },
          React.createElement(LinkIcon, { size: 16 }),
          connectMode ? 'Cancel Connect' : 'Connect Devices'
        ),
        React.createElement(
          'button',
          {
            onClick: () => setShowAddBox(!showAddBox),
            className: 'bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-2'
          },
          React.createElement(PlusIcon, { size: 16 }),
          'Add Box'
        ),
        React.createElement(
          'button',
          {
            onClick: () => setShowAddDevice(!showAddDevice),
            className: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2'
          },
          React.createElement(PlusIcon, { size: 16 }),
          'Add Device'
        )
      )
    ),
    connectMode && React.createElement(
      'div',
      { className: 'bg-yellow-600 text-white p-2 text-center text-sm' },
      connectFrom === null ? 'Click on the first device to connect' : 'Click on the second device to complete the connection'
    ),
    showAddDevice && React.createElement(
      'div',
      { className: 'bg-gray-800 border-b-2 border-gray-700 p-4' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto flex gap-4 items-end' },
        React.createElement(
          'div',
          { className: 'flex-1' },
          React.createElement('label', { className: 'text-gray-400 text-sm block mb-1' }, 'Device Name'),
          React.createElement('input', {
            type: 'text',
            placeholder: 'My Router',
            value: newDevice.name,
            onChange: (e) => setNewDevice({...newDevice, name: e.target.value}),
            className: 'w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
          })
        ),
        React.createElement(
          'div',
          { className: 'flex-1' },
          React.createElement('label', { className: 'text-gray-400 text-sm block mb-1' }, 'IP Address'),
          React.createElement('input', {
            type: 'text',
            placeholder: '192.168.1.1',
            value: newDevice.ip,
            onChange: (e) => setNewDevice({...newDevice, ip: e.target.value}),
            className: 'w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
          })
        ),
        React.createElement(
          'div',
          { className: 'flex-1' },
          React.createElement('label', { className: 'text-gray-400 text-sm block mb-1' }, 'Type'),
          React.createElement(
            'select',
            {
              value: newDevice.type,
              onChange: (e) => setNewDevice({...newDevice, type: e.target.value}),
              className: 'w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
            },
            React.createElement('option', { value: 'router' }, 'Router'),
            React.createElement('option', { value: 'server' }, 'Server'),
            React.createElement('option', { value: 'wifi' }, 'WiFi AP'),
            React.createElement('option', { value: 'storage' }, 'Storage'),
            // i forgot the monitor to rep systems... oops make sure to add it
            React.createElement('option', { value: 'monitor' }, 'End-User Device'),
            // i forgot to create one for a switch
            React.createElement('option', { value: 'switch' }, 'Switch')
          )
        ),
        React.createElement('button', {
          onClick: addDevice,
          className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded'
        }, 'Add'),
        React.createElement('button', {
          onClick: () => setShowAddDevice(false),
          className: 'bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded'
        }, 'Cancel')
      )
    ),
showAddBox && React.createElement(
      'div',
      { className: 'bg-gray-800 border-b-2 border-gray-700 p-4' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto flex gap-4 items-end' },
        React.createElement(
          'div',
          { className: 'flex-1' },
          React.createElement('label', { className: 'text-gray-400 text-sm block mb-1' }, 'Box Name'),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Core Network',
            value: newBox.name,
            onChange: (e) => setNewBox({...newBox, name: e.target.value}),
            className: 'w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
          })
        ),
        React.createElement(
          'div',
          { className: 'flex-1' },
          React.createElement('label', { className: 'text-gray-400 text-sm block mb-1' }, 'Color'),
          React.createElement(
            'select',
            {
              value: newBox.color,
              onChange: (e) => setNewBox({...newBox, color: e.target.value}),
              className: 'w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500'
            },
            React.createElement('option', { value: 'blue' }, 'Blue'),
            React.createElement('option', { value: 'green' }, 'Green'),
            React.createElement('option', { value: 'purple' }, 'Purple'),
            React.createElement('option', { value: 'red' }, 'Red'),
            React.createElement('option', { value: 'yellow' }, 'Yellow'),
            React.createElement('option', { value: 'orange' }, 'Orange')
          )
        ),
        React.createElement('button', {
          onClick: addBox,
          className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded'
        }, 'Add'),
        React.createElement('button', {
          onClick: () => setShowAddBox(false),
          className: 'bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded'
        }, 'Cancel')
      )
    ),
    React.createElement(
      'div',
      {
        id: 'canvas-container',
        className: 'relative w-full h-screen bg-gray-900 overflow-hidden',
        style: { 
          cursor: isPanning ? 'grabbing' : (draggedDevice !== null || draggedBox !== null ? 'grabbing' : 'default')
        },
        onWheel: handleWheel,
        onMouseDown: handleCanvasMouseDown,
        onMouseMove: (e) => {
          handleCanvasMouseMove(e);
          handleMouseMove(e);
        },
        onMouseUp: (e) => {
          handleCanvasMouseUp(e);
          handleMouseUp(e);
        }
      },
      React.createElement(
        'div',
        { className: 'absolute top-4 right-4 z-50 flex flex-col gap-2 bg-gray-800 p-2 rounded-lg border border-gray-700' },
        React.createElement(
          'button',
          {
            onClick: () => setZoom(Math.min(zoom + 0.1, 3)),
            className: 'bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm font-bold'
          },
          '+'
        ),
        React.createElement(
          'div',
          { className: 'text-white text-center text-xs' },
          `${Math.round(zoom * 100)}%`
        ),
        React.createElement(
          'button',
          {
            onClick: () => setZoom(Math.max(zoom - 0.1, 0.1)),
            className: 'bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm font-bold'
          },
          '−'
        ),
        React.createElement(
          'button',
          {
            onClick: () => { setZoom(1); setPanOffset({ x: 0, y: 0 }); },
            className: 'bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs mt-2'
          },
          'Reset'
        )
      ),
      React.createElement(
        'div',
        { className: 'absolute bottom-4 left-4 z-50 bg-gray-800 p-3 rounded-lg border border-gray-700 text-xs text-gray-300' },
        React.createElement('div', {}, '🖱️ Ctrl+Scroll: Zoom'),
        React.createElement('div', {}, '🖱️ Shift+Drag: Pan'),
        React.createElement('div', {}, '🖱️ Ctrl+Drag: Select multiple'),
        React.createElement('div', {}, '🖱️ Drag selected: Move group')
      ),
      isSelecting && React.createElement('div', {
        className: 'absolute border-2 border-blue-500 bg-blue-500 bg-opacity-20 pointer-events-none',
        style: {
          left: `${Math.min(selectionBox.startX, selectionBox.endX) * zoom + panOffset.x}px`,
          top: `${Math.min(selectionBox.startY, selectionBox.endY) * zoom + panOffset.y}px`,
          width: `${Math.abs(selectionBox.endX - selectionBox.startX) * zoom}px`,
          height: `${Math.abs(selectionBox.endY - selectionBox.startY) * zoom}px`,
          zIndex: 100
        }
      }),
      React.createElement(
        'div',
        {
          style: {
            transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoom})`,
            transformOrigin: '0 0',
            width: '100%',
            height: '100%',
            position: 'relative'
          }
        },
        React.createElement(
          'svg',
          {
            className: 'absolute inset-0 w-full h-full pointer-events-none',
            style: { zIndex: 1 }
          },
          connections.map((conn, index) => {
            const from = getDeviceCenter(conn.from);
            const to = getDeviceCenter(conn.to);
            return React.createElement(
              'g',
              { key: index },
              React.createElement('line', {
                x1: from.x,
                y1: from.y,
                x2: to.x,
                y2: to.y,
                stroke: '#4b5563',
                strokeWidth: '2'
              }),
              React.createElement('circle', {
                cx: (from.x + to.x) / 2,
                cy: (from.y + to.y) / 2,
                r: '8',
                fill: '#ef4444',
                className: 'cursor-pointer pointer-events-auto',
                onClick: () => removeConnection(index)
              }),
              React.createElement(
                'text',
                {
                  x: (from.x + to.x) / 2,
                  y: (from.y + to.y) / 2,
                  fill: 'white',
                  fontSize: '10',
                  textAnchor: 'middle',
                  dominantBaseline: 'middle',
                  className: 'pointer-events-none'
                },
                '×'
              )
            );
          })
        ),
        boxes.map(box =>
          React.createElement(
            'div',
            {
              key: box.id,
              className: `absolute border-2 ${boxColors[box.color]} bg-transparent rounded-lg group`,
              style: {
                left: `${box.x}px`,
                top: `${box.y}px`,
                width: `${box.width}px`,
                height: `${box.height}px`,
                zIndex: 2
              },
              onMouseDown: (e) => handleBoxMouseDown(e, box)
            },
            React.createElement(
              'div',
              { className: 'absolute -top-6 left-0 bg-gray-800 px-2 py-1 rounded text-white text-sm font-semibold' },
              box.name
            ),
            React.createElement(
              'button',
              {
                onClick: () => removeBox(box.id),
                className: 'absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10',
                onMouseDown: (e) => e.stopPropagation()
              },
              React.createElement(XIcon, { size: 12 })
            ),
            React.createElement(
              'div',
              {
                className: 'absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize',
                onMouseDown: (e) => {
                  e.stopPropagation();
                  setResizingBox(box.id);
                }
              },
              React.createElement('div', { className: 'absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-gray-400' })
            )
          )
        ),
        devices.map(device => {
          const Icon = getDeviceIcon(device.type);
          const statusColor = device.status === 'up' ? 'bg-green-500' :
                            device.status === 'down' ? 'bg-red-500' : 'bg-gray-500';
          const isSelected = selectedDevices.has(device.id);

          return React.createElement(
            'div',
            {
              key: device.id,
              className: `absolute group ${isSelected ? 'ring-4 ring-blue-400 rounded-lg' : ''}`,
              style: {
                left: `${device.x}px`,
                top: `${device.y}px`,
                cursor: connectMode ? 'pointer' : (draggedDevice === device.id || isDraggingGroup ? 'grabbing' : 'grab'),
                zIndex: 10
              },
              onMouseDown: (e) => handleDeviceMouseDown(e, device),
              onClick: () => handleDeviceClick(device.id)
            },
            React.createElement(
              'div',
              { className: 'relative' },
              React.createElement(
                'button',
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    removeDevice(device.id);
                  },
                  className: 'absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10',
                  onMouseDown: (e) => e.stopPropagation()
                },
                React.createElement(XIcon, { size: 12 })
              ),
              React.createElement(
                'div',
                { className: 'flex flex-col items-center' },

		React.createElement(
		  'div',
		  { className: 'flex flex-col items-center' },
		  React.createElement(
			'div',
			{ className: `${connectFrom === device.id ? 'ring-4 ring-yellow-400 rounded-lg' : ''} mb-2` },
			React.createElement(Icon, { 
			  size: 64, 
			  strokeWidth: 1.5,
			  className: device.status === 'up' ? 'text-green-500' : 
						 device.status === 'down' ? 'text-red-500' : 'text-gray-500'
			})
		 ) ),
                React.createElement(
                  'div',
                  { className: 'bg-gray-800 border border-gray-700 rounded px-3 py-1' },
                  React.createElement(
                    'div',
                    { className: 'text-white text-sm font-semibold text-center whitespace-nowrap' },
                    device.name
                  ),
                  React.createElement(
                    'div',
                    { className: 'text-gray-400 text-xs text-center' },
                    device.ip
                  )
                )
              )
            )
          );
        })
      )
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(NetworkMonitor));
