import React from "react";
import { useSDK } from "@thirdweb-dev/react";

const DeployButton = () => {
  const sdk = useSDK();

  async function deployContract() {
    sdk?.deployer.deployNFTDrop({
      name: "My NFT Drop",
      primary_sale_recipient: "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0",
    });
  }

  return <button onClick={deployContract}>Deploy Button</button>;
};

export default DeployButton;
