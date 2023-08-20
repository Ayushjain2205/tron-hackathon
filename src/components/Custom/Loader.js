import React, { useContext } from "react";
import Lottie from "react-lottie-player";

// Import animation data
import optimismAnimation from "../../helpers/optimisim.json";
import ethereumAnimation from "../../helpers/ethereum.json";
import polygonAnimation from "../../helpers/polygon.json";
import lineaAnimation from "../../helpers/linea.json";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const Loader = () => {
  const { ecosystem } = useContext(EcoSystemContext);

  // Choose the right animation data based on the ecosystem
  const animationData = {
    ethereum: ethereumAnimation,
    polygon: polygonAnimation,
    optimism: optimismAnimation,
    linea: lineaAnimation,
  };

  return (
    <div>
      <Lottie
        loop
        animationData={lineaAnimation} // Default to ethereum animation if the ecosystem is not recognized
        play
        style={{ width: 117, height: 117 }}
      />
    </div>
  );
};

export default Loader;
