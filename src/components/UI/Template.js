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

const Template = ({ template }) => {
  let component;

  switch (template) {
    case "mintNFT":
      component = <Create />;
      break;
    case "smartContract":
      component = <Deploy />;
      break;
    case "guide":
      component = <Guide />;
      break;
    case "sendMoney":
      component = <SendMoney />;
      break;
    case "reminder":
      component = <Reminder />;
      break;
    case "task":
      component = <Task />;
      break;
    case "drop":
      component = <Drop />;
      break;
    case "walletHealth":
      component = <WalletHealth />;
      break;
    case "bridge":
      component = <Bridge />;
      break;
    default:
      component = <None text={template} />;
      break;
  }

  return <div>{component}</div>;
};

export default Template;
