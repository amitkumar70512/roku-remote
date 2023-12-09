// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DeviceInfoView from './DeviceInfoView';


// export default function RokuDeviceInfo ({ipAddress}) {
//     const [deviceInfo, setDeviceInfo] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(`http://${ipAddress}:8060/query/device-info`);
//             console.log(response)
//             setDeviceInfo(response.data);
//           } catch (error) {
//             console.error('Error fetching device info:', error);
//           }
//         };
    
//         fetchData();
//       }, [ipAddress]);

//   return (
//     <div>
//       <p className="d-inline-flex gap-1">
//         <a
//           className="btn btn-primary"
//           data-bs-toggle="collapse"
//           href="#collapseExample"
//           role="button"
//           aria-expanded="false"
//           aria-controls="collapseExample"
//         >
//          Device Info
//         </a>
//       </p>
//       <div className="collapse" id="collapseExample">
//         <div className="card card-body">
          
//           <DeviceInfoView deviceInfo={deviceInfo}/>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';

const RokuDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    // Define a function to handle the JSONP response
    const handleJSONPResponse = (data) => {
      setDeviceInfo(data);
    };

    // Create a script element to load data from the Roku device using JSONP
    const script = document.createElement('script');
    script.src = `http://172.20.0.10:8060/query/device-info?callback=handleJSONPResponse`;
    document.body.appendChild(script);

    // Clean up the script element on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <h1>Roku Device Info</h1>
      {deviceInfo ? (
        <pre>{JSON.stringify(deviceInfo, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RokuDeviceInfo;
