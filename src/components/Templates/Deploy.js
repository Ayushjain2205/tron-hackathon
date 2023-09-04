import React, { useContext, useState } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";
import { useSigner } from "@thirdweb-dev/react";
import TemplateHolder from "../UI/TemplateHolder";
import DeployButton from "../Buttons/DeployButton";
import contract_templates from "../../data/contract_data";

const InputBox = ({ label, value }) => (
  <div className="flex flex-col">
    <label className="text-[16px] text-black text-opacity-90 mb-[8px]">
      {label}
    </label>
    <div className="w-[379px] h-[40px] bg-white rounded-[10px] flex flex-row items-center p-[14px] pl-[16px] mb-[8px]">
      <input
        type="text"
        value={value}
        className="w-[450px] h-[20px] text-[16px] focus:outline-none text-[#26262690] bg-[#fff]"
      />
    </div>
  </div>
);

const Deploy = () => {
  const { ecosystem } = useContext(EcoSystemContext);
  const [showDrop, setShowDrop] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  const DEFAULT_NAME = "My Art NFT";
  const DEFAULT_DESC =
    "A tokenized representation of the Starry Night painting";
  const DEFAULT_SYMBOL = "MAT";
  const DEFAULT_ADDRESS = "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0";
  const DEFAULT_PERCENTAGE = "10%";

  const [imageName, setImageName] = useState(DEFAULT_NAME);
  const [imageDescription, setImageDescription] = useState(DEFAULT_DESC);
  const [symbol, setSymbol] = useState(DEFAULT_SYMBOL);
  const [recipientAddress, setRecipientAddress] = useState(DEFAULT_ADDRESS);
  const [percentage, setPercentage] = useState(DEFAULT_PERCENTAGE);

  const signer = useSigner();

  const signMessage = async () => {
    const message = `Name: ${imageName}, Description: ${imageDescription}, Symbol: ${symbol}, Recipient Address: ${recipientAddress}, Percentage: ${percentage}`;
    try {
      const signature = await signer.signMessage(message);
      console.log(signature);
      setIsSigned(true);
    } catch (err) {
      console.error("Error signing the message:", err);
    }
  };

  return (
    <TemplateHolder title="Deploy smart contract">
      {!showDrop ? (
        <div className="choose">
          <p className="text-[24px]">Choose a smart contract</p>
          <div className="grid grid-cols-3 gap-4 mt-[24px]">
            {contract_templates.map((card, index) => (
              <div
                key={index}
                className="flex flex-col p-[16px] w-[258px] h-[175px] bg-white rounded-[10px] cursor-pointer"
                onClick={() => setShowDrop(true)}
              >
                <div className="flex flex-row gap-[8px] mb-[4px]">
                  <img src="/images/check-circle.svg" alt="" />
                  <p className="text-[12px]">Audited</p>
                </div>
                <p className="text-[20px] font-bold mb-[12px]">{card.title}</p>
                <p className="w-[223px] text-[16px] mb-[21px] leading-[21px]">
                  {card.text}
                </p>
                <p className="text-[14px] text-[#CAC7C7]">thirdweb.eth</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="drop">
          <p className="text-[24px] font-bold">NFT Drop</p>
          <div className="flex flex-row gap-[24px] mt-[24px]">
            <InputBox label="Upload an image" value={imageName} />
            <InputBox label="Name" value={imageName} />
            <InputBox label="Description" value={imageDescription} />
            <InputBox label="Symbol" value={DEFAULT_SYMBOL} />
            <InputBox label="Recipient address" value={DEFAULT_ADDRESS} />
            <InputBox label="Percentage" value={DEFAULT_PERCENTAGE} />
          </div>
        </div>
      )}

      <div className="flex flex-row mt-[25px] justify-between">
        <img
          className="h-[36px] w-[36px]"
          src={`/logos/${ecosystem}.svg`}
          alt=""
        />
        {showDrop && (
          <>
            {!isSigned ? (
              <button
                className="w-[246px] h-[60px] text-white font-bold text-[20px] rounded-[8px] bg-[#262626]"
                onClick={signMessage}
              >
                CONFIRM
              </button>
            ) : (
              <DeployButton />
            )}
          </>
        )}
      </div>
    </TemplateHolder>
  );
};

export default Deploy;
