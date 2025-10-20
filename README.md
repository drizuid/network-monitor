While I was in the US Army from 2002 to 2013 we regularly used a simple network monitoring program called SNMPc, created by a company called Castlerock. 
While it had some advanced features, we generally just used it as a simple icmp check. Green icon for up, red icon for down. 
The software itself looks very old (think windows 3.1 if you can) I decided I wanted something similar for my network, so I started work on a web based project to do the same thing and this is the result. 
It was written for me based on what I wanted, but a friend asked if he could get a copy, so I decided to publish.

While I am happy to entertain ideas for new features, I made this for me, so if I don't see a use I won't work on something. 
If you still want the change, submit a fully tested PR and I'm happy to entertain pulls.

docker run example:
```bash
docker run -d \
  --name=network-monitor \
  -e CONFIG_FILE=/config/network-monitor/config.json \
  -p 5000:5000 \
  -v /path/to/config.json:/config/network-monitor/config.json \
  --restart unless-stopped \
  ghcr.io/drizuid/network-monitor:latest
  ```
docker compose example:
```yaml
---
services:
  network-monitor:
    image: ghcr.io/drizuid/network-monitor:latest
    container_name: network-monitor
    environment:
      - CONFIG_FILE=/config/network-monitor/config.json
    volumes:
      - /path/to/config.json:/config/network-monitor/config.json
    ports:
      - 5000:5000
    restart: unless-stopped
```

**Notes**: 
* **Use:**
    * Load it up, you'll have example "nodes." You can remove those nodes by hovering and clicking the **red x**.
    * You can remove "links" by clicking the **red x**.
    * You can remove boxes by clicking the **red x**.
    * You **can not edit** existing items you can add new items, links, or boxes at the top right of the screen.
* If you use **VLANs** and the application's host, container, or VM can't reach the other VLANs via ICMP, you won't be able to monitor those nodes, this isn't a bug, it's just common sense.
* If you run this in a **container** and want to monitor the docker host, **localhost will be the container itself**, not the host, this isn't a bug, it's just common sense.

<img width="2121" height="1966" alt="image" src="https://github.com/user-attachments/assets/7b4e92a1-ef5d-4190-a3a5-430ce875a6e4" />
