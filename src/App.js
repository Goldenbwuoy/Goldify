import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './config/spotify';

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    
    const _token = hash.access_token

    if(_token) {
      setToken(_token)
    }
  }, [])

  return (
    <div className="App">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
