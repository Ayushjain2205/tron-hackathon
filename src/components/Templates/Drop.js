import React, { useState, useRef, useEffect } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import Reminder from "./Reminder";

const Drop = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [keypressActive, setKeypressActive] = useState(true);

  const [showReminder, setShowReminder] = useState(false);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (keypressActive) {
        const { key, shiftKey, altKey, ctrlKey, metaKey } = event;
        const capsLockActive = event.getModifierState("CapsLock");
        const modifierKeysPressed =
          shiftKey || altKey || ctrlKey || metaKey || capsLockActive;
        if (
          !inputRef.current ||
          modifierKeysPressed ||
          key === "Escape" ||
          key === "Tab"
        ) {
          return;
        }
        event.preventDefault();
        if (key === "Enter") {
          const newValue = inputRef.current.value.trim();
          if (newValue !== "") {
            setShowReminder(true);
            setIsInputDisabled(true);
          }
        } else if (key === "Backspace") {
          setInputValue((prevValue) => prevValue.slice(0, -1));
        } else {
          setInputValue((prevValue) => prevValue + key);
        }
        inputRef.current.focus();
      } else return;
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <TemplateHolder title="NFT drop calender">
        <div className="flex flex-row w-[705px]">
          <div className="flex flex-col gap-[8px]">
            <span className="text-[32px] text-black font-bold">July 2023</span>
            <span className="text-[20px] text-black font-bold">
              Exiled Racers NFT
            </span>
          </div>
          <div className="grid grid-cols-3 gap-[16px] ml-[68px]">
            <img
              className="h-[138px] w-[138px] rounded-[8px]"
              src="https://exr.mypinata.cloud/ipfs/QmNX7rTR37HvQsm5TRpWsHLn4nA2r78ye1RCW7GRyKtLAa"
              alt=""
            />
            <img
              className="h-[138px] w-[138px] rounded-[8px]"
              src="https://exr.mypinata.cloud/ipfs/QmNXA32jg2rFez12XXp1VbiAQ2DsV33XDTjYCjGp9w78t5"
              alt=""
            />
            <img
              className="h-[138px] w-[138px] rounded-[8px]"
              src="https://exr.mypinata.cloud/ipfs/QmQNd8G6znpFTAeC7cRen7J8LVan9NaiWZ4Cu7kvcpdnV6"
              alt=""
            />
          </div>
        </div>
      </TemplateHolder>
      <input
        type="text"
        placeholder=""
        className="border-0 text-primary outline-none bg-transparent text-2xl font-bold mt-[24px] mb-[16px]"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        ref={!isInputDisabled ? inputRef : null}
        disabled={isInputDisabled}
      />

      {showReminder && <Reminder placeholder="Exiled Racers NFT drop" />}
    </div>
  );
};

export default Drop;
