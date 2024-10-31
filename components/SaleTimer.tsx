import clsx from "clsx";
import Image from "next/image";

const SaleTimer = ({
  isSaleEnded,
  saleTime,
  className,
  withArrow = false,
}: {
  isSaleEnded: boolean;
  saleTime: number;
  className?: string;
  withArrow?: boolean;
}) => {
  if (isSaleEnded) return null;

  return (
    <div
      className={clsx(
        "mt-10 lg:mt-0 relative flex w-full bg-saleBlack gap-2.5 p-2 lg:px-2 lg:pt-5 lg:pb-3 lg:rounded-none lg:rounded-t-xl rounded-xl items-center justify-center",
        className
      )}
    >
      <Image
        src={"/images/timer-icon.svg"}
        width={24}
        height={24}
        alt="timer"
      />
      <p className=" uppercase text-lightYellow text-sm lg:text-base tracking-[0.15px] font-semibold">
        SALE ENDS IN
      </p>
      <span className="uppercase text-lightYellow text-sm lg:text-base tracking-[0.15px] font-semibold">
        {new Date(saleTime! * 1000)
          .toISOString()
          .slice(saleTime < 3600 ? 14 : 11, 19)}
      </span>
      {withArrow && (
        <div className="absolute top-[calc(100%-1px)] right-7 border-x-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-saleBlack" />
      )}
    </div>
  );
};

export default SaleTimer;
