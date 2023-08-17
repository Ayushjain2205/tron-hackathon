import { useContext } from "react";
import { EcoSystemContext } from "../contexts/EcoSystemContext";
import colors from "../data/colors";

const getColor = () => {
  const { ecosystem } = useContext(EcoSystemContext);

  // Check if the ecosystem exists in the colors object
  // and return the background color or return a default color if not found
  return colors[ecosystem] ? colors[ecosystem].bg : "#ffffff";
};

export default getColor;
