import React from "react";
import Image from "next/image";
import clsx from "clsx";

const toolsList = [
  {
    id: 1,
    name: "Paraphraser",
    icon: "/images/paraphraser-icon.svg",
    iconWidth: 18,
  },
  {
    id: 2,
    name: "Grammar Check",
    icon: "/images/grammar-check-icon.svg",
    iconWidth: 18,
  },
  {
    id: 3,
    name: "Plagiarism Check",
    icon: "/images/plagiarism-check-icon.svg",
    iconWidth: 18,
  },
  {
    id: 4,
    name: "AI Humanizer",
    icon: "/images/ai-humanizer-icon.svg",
    iconWidth: 20,
  },
  {
    id: 5,
    name: "AI Detector",
    icon: "/images/ai-detector-icon.svg",
    iconWidth: 18,
  },
  {
    id: 6,
    name: "Summarizer",
    icon: "/images/summarizer-icon.svg",
    iconWidth: 18,
  },
  {
    id: 7,
    name: "Chrome Extension",
    icon: "/images/extension-icon.svg",
    iconWidth: 20,
  },
];

const Tools = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex mt-4 items-center w-max space-x-4", className)}>
      {toolsList.map((tool) => (
        <div className="flex flex-col items-center py-4 gap-2" key={tool?.id}>
          <Image
            width={tool?.iconWidth}
            height={20}
            src={tool?.icon}
            alt={tool?.name}
          />
          <p className=" text-textSecondary whitespace-nowrap font-semibold text-base tracking-[0.15px] capitalize">
            {tool?.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tools;
