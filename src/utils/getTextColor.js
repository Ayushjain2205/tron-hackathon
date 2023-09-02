import { useContext } from "react";
import { EcoSystemContext } from "../contexts/EcoSystemContext";
import colors from "../data/colors";

const getTextColor = () => {
  const { ecosystem } = useContext(EcoSystemContext);

  return colors[ecosystem] ? colors[ecosystem].text : "#ffffff";
};

export default getTextColor;
