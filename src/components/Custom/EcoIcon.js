import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const EcoIcon = () => {
  const { ecosystem } = useContext(EcoSystemContext);
  return (
    <img className="h-[36px] w-[36px]" src={`/logos/${ecosystem}.svg`} alt="" />
  );
};

export default EcoIcon;
