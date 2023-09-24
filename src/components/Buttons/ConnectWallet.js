import React, { useEffect, useState } from "react";
import TronWeb from "tronweb";

function ConnectWallet() {
  const [tronWebState, setTronWebState] = useState({
    instance: null,
    isConnected: false,
  });

  // Function to check and set the TronWeb instance from TronLink
  const initializeTronWeb = () => {
    if (window.tronWeb && window.tronWeb.ready) {
      setTronWebState({
        instance: window.tronWeb,
        isConnected: true,
      });
    } else {
      console.warn("TronWeb is not installed. Install TronLink.");
    }
  };

  useEffect(() => {
    initializeTronWeb();
  }, []);

  // Toggle the connection
  const toggleConnection = () => {
    if (tronWebState.isConnected) {
      // Disconnect
      setTronWebState({
        instance: null,
        isConnected: false,
      });
    } else {
      // Try to Connect
      initializeTronWeb();
    }
  };

  return (
    <div className="ConnectWallet">
      {tronWebState.isConnected ? (
        <div>
          <h1>Connected to Tron Network</h1>
          <p>Address: {tronWebState.instance.defaultAddress.base58}</p>
          <button onClick={toggleConnection}>Disconnect</button>
        </div>
      ) : (
        <div>
          <h1>Disconnected</h1>
          <button onClick={toggleConnection}>Connect</button>
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
