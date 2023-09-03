import React from "react";

const ChooseTemplate = ({ handleNext }) => {
  const [selectedTitles, setSelectedTitles] = React.useState([]);

  const templates = [
    {
      title: "Generate NFTs",
      content: "Template that can help users generate a NFT within 2 clicks.",
    },
    {
      title: "Buy NFT",
      content: "Template that can help users buy NFTs within 2 clicks.",
    },
    {
      title: "Deploy contracts",
      content:
        "A smart contract will be generated for you, from a range of options.",
    },
    {
      title: "User Manual",
      content: "Any guide that the user needs, the agent will be here.",
    },
  ];

  const handleSelect = (title) => {
    setSelectedTitles((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="relative mt-[42px]">
      <div className="grid grid-cols-4 gap-4">
        {templates.map((template, index) => (
          <TemplateCard
            key={index}
            title={template.title}
            content={template.content}
            onSelect={handleSelect}
            isSelected={selectedTitles.includes(template.title)}
            index={index + 1}
          />
        ))}
      </div>
      <div className="fixed bottom-0 right-0 w-full h-[80px] bg-[#f9f9f9]">
        <div className="flex flex-row gap-[24px] h-full items-center justify-end px-[48px]">
          <p className="text-[16px]">
            {selectedTitles.join(", ")}
            {selectedTitles.length > 0 && ` (${selectedTitles.length})`}
          </p>
          <div
            className="flex flex-row items-center justify-center w-[226px] h-[60px] bg-[#699BF7] rounded-[8px] text-[20px] font-bold text-white cursor-pointer"
            onClick={handleNext}
          >
            CHOOSE
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateCard = ({ title, content, onSelect, isSelected, index }) => {
  return (
    <div
      className={`flex flex-col w-[389px] cursor-pointer ${
        isSelected ? "border-4 border-blue-500 rounded-[20px]" : ""
      }`}
      onClick={() => onSelect(title)}
    >
      <div className="flex flex-row w-full h-[52px] bg-[#699BF7] font-bold text-white text-[24px] px-[16px] items-center rounded-t-[15px]">
        {title}
      </div>
      <div className="flex flex-col p-[16px] bg-[#f8f8f8] rounded-b-[15px]">
        <div className="flex flex-row h-[301px] bg-white justify-center items-center ">
          <img
            className="h-[150px] w-[150px]"
            src={`/cats/cat${index}.svg`}
            alt=""
          />
        </div>
        <p className="text-[20px] text-[#26262680] leading-[24px] mt-[33px] mb-[28px] h-[117px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ChooseTemplate;
