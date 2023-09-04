import React, { useState } from "react";
import { useSDK } from "@thirdweb-dev/react";
import { useWallet } from "../../contexts/WalletContext";
import { toast } from "react-hot-toast";

const DeployButton = () => {
  const [deploying, setDeploying] = useState(false);

  const sdk = useSDK();
  const { wallet, checkWallet } = useWallet();

  const handleCheckWallet = () => {
    const result = checkWallet();
    return result;
  };

  async function deployContract() {
    const isConnected = handleCheckWallet();
    if (isConnected) {
      try {
        setDeploying(true);
        await sdk?.deployer.deployNFTDrop({
          name: "My NFT Drop",
          primary_sale_recipient: "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0",
        });
        toast.success("Transcation successful!");
        setDeploying(false);
      } catch (e) {
        toast.error("Transcation Rejected");
        setDeploying(false);
      }
    }
  }

  return (
    <button
      className="flex flex-row items-center justify-center w-[246px] h-[60px] text-white font-bold text-[20px] rounded-[8px] bg-[#262626] cursor-pointer"
      onClick={deployContract}
    >
      {!deploying ? (
        "DEPLOY"
      ) : (
        <>
          <span className="loading loading-spinner"></span>
          &nbsp;DEPLOYING
        </>
      )}
    </button>
  );
};

export default DeployButton;
