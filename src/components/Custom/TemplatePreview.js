import React, { useState } from "react";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";

const TemplatePreview = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="h-[620px] w-[878px] bg-white rounded-[20px]">
      <div className="flex flex-row justify-between p-[16px]">
        <p className="text-[24px] text-[#676767]">Step {currentStep}</p>
        <div className="flex flex-row">
          <svg
            onClick={handlePrevious}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M22.5 27L13.5 18L22.5 9"
              stroke="#B0B0B0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M13.5 27L22.5 18L13.5 9"
              stroke="#B0B0B0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {steps[currentStep - 1]}
    </div>
  );
};

export default TemplatePreview;
