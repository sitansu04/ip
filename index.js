const express = require("express");
const unirest = require("unirest");
const os = require("os");
const cors = require("cors");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  function getDeviceIP() {
    const networkInterfaces = os.networkInterfaces();

    for (const interfaceName in networkInterfaces) {
      const interfaces = networkInterfaces[interfaceName];

      for (const iface of interfaces) {
        // Skip over non-IPv4 and internal (e.g., loopback) addresses
        if (iface.family === "IPv4" && !iface.internal) {
          return iface.address;
        }
      }
    }

    return "Device IP not found";
  }

  // Usage
  const deviceIP = getDeviceIP();
  res.send({Device_IP: deviceIP});
});

app.listen(8080, () => {
  console.log(`connected`);
});
