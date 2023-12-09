import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RokuChannels = ({ipAddress}) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    // Fetch the list of channels when the component mounts
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    try {
      const response = await axios.get(`http://${ipAddress}:8060/query/media-player`);
      console.log(response)
      // Extract the list of channels from the response
      const channelList = response.data.map(channel => ({
        id: channel.id,
        name: channel.name,
      }));
      setChannels(channelList);
    } catch (error) {
      console.error('Error fetching channels:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchChannels}>Fetch Channels</button>

      <h2>Installed Channels:</h2>
      <ul>
        {channels.map(channel => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RokuChannels;
