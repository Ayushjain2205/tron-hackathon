import { useContext } from "react";
import { EcoSystemContext } from "../contexts/EcoSystemContext";
import colors from "../data/colors";

const getColor = () => {
  const { ecosystem } = useContext(EcoSystemContext);

  return colors[ecosystem] ? colors[ecosystem].bg : "#ffffff";
};

export default getColor;
