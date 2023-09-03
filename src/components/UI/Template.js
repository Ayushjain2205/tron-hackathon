import React from "react";
import Create from "../Templates/Create";
import Deploy from "../Templates/Deploy";
import Guide from "../Templates/Guide";
import None from "../Templates/None";
import SendMoney from "../Templates/SendMoney";
import Reminder from "../Templates/Reminder";
import Task from "../Templates/Task";
import Drop from "../Templates/Drop";
import WalletHealth from "../Templates/WalletHealth";
import Bridge from "../Templates/Bridge";
import BuyNFT from "../Templates/BuyNFT";

const componentMapping = {
  mintNFT: Create,
  smartContract: Deploy,
  guide: Guide,
  sendMoney: SendMoney,
  reminder: Reminder,
  task: Task,
  drop: Drop,
  walletHealth: WalletHealth,
  bridge: Bridge,
  buyNFT: BuyNFT,
};

const Template = ({ template }) => {
  const Component = componentMapping[template] || None;
  return (
    <div>
      <Component />
    </div>
  );
};

export default Template;
