import React, { useState, useMemo } from "react";
import { TwitterPicker } from "react-color";

const Colorpicker = ({ rgba }) => {
  const initialColor = useMemo(() => {
    return rgba ? parseRGBA(rgba) : { r: 217, g: 217, b: 217, a: 1 };
  }, [rgba]);

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(initialColor);

  const toggleColorPicker = () => setDisplayColorPicker((prev) => !prev);
  const closeColorPicker = () => setDisplayColorPicker(false);

  const onColorChange = (newColor) => setColor(newColor.rgb);

  return (
    <div>
      <div
        className="w-[34px] h-[34px] rounded-full cursor-pointer"
        onClick={toggleColorPicker}
        style={{
          background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        }}
      />
      {displayColorPicker && (
        <div className="absolute z-10">
          <div className="fixed inset-0" onClick={closeColorPicker} />
          <TwitterPicker color={color} onChange={onColorChange} />
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
