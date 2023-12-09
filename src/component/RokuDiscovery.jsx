import React, { useEffect, useState } from 'react';

const RokuDiscovery = () => {
  const [rokuDevices, setRokuDevices] = useState([]);

  useEffect(() => {
    const discoverRokuDevices = () => {
      const udpSocket = new window.RTCDataChannel();
      udpSocket.bind(0, '0.0.0.0', () => {
        const discoveryMessage = `M-SEARCH * HTTP/1.1\r\n` +
          `HOST: 239.255.255.250:1900\r\n` +
          `MAN: "ssdp:discover"\r\n` +
          `MX: 3\r\n` +
          `ST: roku:ecp\r\n\r\n`;

        udpSocket.send(discoveryMessage, 0, discoveryMessage.length, 1900, '239.255.255.250');
      });

      udpSocket.on('message', (message) => {
        // Process SSDP response
        console.log('SSDP Response:', message);
        // Parse the response and update the state with discovered devices
        // setRokuDevices(parsedDevices);
      });

      // Stop the discovery after a certain time (e.g., 10 seconds)
      setTimeout(() => {
        udpSocket.close();
      }, 10000);

      return () => {
        // Cleanup: Stop the discovery process and close the socket
        udpSocket.close();
      };
    };

    // Start the discovery process
    discoverRokuDevices();
  }, []);

  return (
    <div>
      <h2>Discovered Roku Devices</h2>
      <ul>
        {rokuDevices.map((device, index) => (
          <li key={index}>{device.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RokuDiscovery;
