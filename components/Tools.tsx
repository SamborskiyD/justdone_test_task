import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { tools } from "../helpers/constants";

const Tools = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex mt-4 items-center w-max space-x-4", className)}>
      {tools.map((tool) => (
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
