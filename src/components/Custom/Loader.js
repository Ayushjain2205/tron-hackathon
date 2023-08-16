import React, { useContext } from "react";
import Lottie from "react-lottie-player";
import mode from "../../helpers/mode.json";
import zora from "../../helpers/zora.json";
import optimisim from "../../helpers/optimisim.json";
import base from "../../helpers/base.json";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const Loader = () => {
  const { ecosystem } = useContext(EcoSystemContext);

  return (
    <div>
      <Lottie
        loop
        animationData={
          ecosystem === "ethereum"
            ? mode
            : ecosystem === "polygon"
            ? zora
            : ecosystem === "optimism"
            ? optimisim
            : base
        }
        play
        style={{ width: 117, height: 117 }}
      />
    </div>
  );
};

export default Loader;
