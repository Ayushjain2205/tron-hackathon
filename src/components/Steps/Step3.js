import React from "react";

const CategoryTag = ({ label, isSelected = false }) => {
  return (
    <span
      className={`rounded-[4px] px-[20px] py-[4px] text-[20px] ${
        isSelected ? "border border-black" : "bg-white"
      }`}
    >
      {label}
    </span>
  );
};

const Step3 = () => {
  const categories = [
    "All",
    "Music",
    "Art",
    "Sports",
    "Media",
    "Movies",
    "AI",
    "Entertainment",
    "Generative",
    "Collectible",
  ];

  return (
    <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
      <div className="w-[778px] h-[212px] bg-[#f8f8f8] p-[16px] rounded-[8px]">
        <p className="text-[24px] mb-[24px]">Pick categories</p>
        <div className="flex flex-wrap gap-[12px] cursor-pointer">
          {categories.map((category, index) => (
            <CategoryTag
              key={index}
              label={category}
              isSelected={category === "Art"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3;
