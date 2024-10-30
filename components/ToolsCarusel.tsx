"use client";
import Tools from "./Tools";

const ToolsCarousel = () => {
  return (
    <div className="max-w-full overflow-hidden flex">
      <div className="animate-infinite-slide toolsLg:animate-infinite-slide-2 lg:!animate-none flex space-x-4">
        <Tools />
        <Tools className="flex lg:hidden" />
        <Tools className="hidden toolsLg:flex lg:!hidden" />
      </div>
    </div>
  );
};

export default ToolsCarousel;
