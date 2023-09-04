import React, { createContext, useContext, useState, useCallback } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { toast } from "react-hot-toast";

export const WalletContext = createContext({
  wallet: null,
  setWallet: () => {},
  checkWallet: () => {},
});

export const WalletProvider = ({ children }) => {
  const address = useAddress();
  const [wallet, setWallet] = useState(null);

  const checkWallet = useCallback(() => {
    if (address) {
      setWallet(address);
      return address;
    } else {
      setWallet(null);
      toast.error("No wallet connected.");
      return null;
    }
  }, [address]);

  return (
    <WalletContext.Provider value={{ wallet, setWallet, checkWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
