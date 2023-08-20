import React, { useState } from "react";
import { TwitterPicker } from "react-color";

const Colorpicker = ({ rgba }) => {
  const initialColor = rgba
    ? parseRGBA(rgba)
    : {
        r: "217",
        g: "217",
        b: "217",
        a: "1",
      };

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(initialColor);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setColor(newColor.rgb);
  };

  return (
    <div>
      <div className="rounded-full cursor-pointer" onClick={handleClick}>
        <div
          className="w-[34px] h-[34px] rounded-full"
          style={{
            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
          }}
        />
      </div>
      {displayColorPicker && (
        <div className="absolute z-10">
          <div className="fixed inset-0" onClick={handleClose} />
          <TwitterPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

const parseRGBA = (rgba) => {
  const [r, g, b, a] = rgba
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);
  return { r, g, b, a: a.toFixed(1) };
};

export default Colorpicker;
