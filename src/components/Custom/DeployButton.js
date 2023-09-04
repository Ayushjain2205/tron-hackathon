import React from "react";
import { useSDK } from "@thirdweb-dev/react";
import { useWallet } from "../../contexts/WalletContext";

const DeployButton = () => {
  const sdk = useSDK();
  const { wallet, checkWallet } = useWallet();

  const handleCheckWallet = () => {
    const result = checkWallet();
    console.log("Check Wallet Result:", result);
  };

  async function deployContract() {
    const wallet = handleCheckWallet();
    if (wallet) {
      sdk?.deployer.deployNFTDrop({
        name: "My NFT Drop",
        primary_sale_recipient: "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0",
      });
    }
  }

  return <button onClick={deployContract}>Deploy Button</button>;
};

export default DeployButton;
