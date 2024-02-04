import React, { useState, useEffect } from 'react';

import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Make an HTTP GET request to the Nodejs server
    axios.get('/api/data')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }, []); // Empyt dependenct array to run the effect once on component mount

  return (
    <div className="App">
      <h1>{data.message}</h1>
    </div>
  );
}

export default App;