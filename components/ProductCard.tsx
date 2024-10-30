import clsx from "clsx";
import { formatPrice } from "../helpers/formatPrice";
import Image from "next/image";

export interface Product {
  isPopular?: boolean;
  isBestValue?: boolean;
  discount: string;
  id: string;
  name: string;
  regularity: string;
  price: number;
  prev_price?: number;
  currency: string;
  trial_period: number;
  trial_amount: number;
  label: string;
  per_text: string;
}

interface ProductCardProps {
  onClick: () => void;
  selected: boolean;
  isSaleEnded: boolean;
  product: Product;
  saleTime?: number;
}

const ProductCard = ({
  isSaleEnded,
  selected,
  product,
  onClick,
  saleTime,
}: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        " rounded-2xl w-full flex flex-col relative border-4 cursor-pointer transition-colors duration-300",
        selected ? " border-green" : " border-lightGreen"
      )}
    >
      <span className="absolute font-semibold -translate-y-1/2 left-11 top-0 bg-green rounded-full text-white text-center text-xs leading-5 tracking-[0.1px] pl-2.5 py-1 pr-[9px]">
        {product.isPopular
          ? "Most Popular"
          : product.discount
          ? "Save " + product.discount + "%"
          : ""}
      </span>

      {product.isBestValue && (
        <span className="absolute flex items-center rotate-[4.26deg] top-0 right-[30px] -translate-y-[80%] font-semibold bg-yellow rounded-full text-textSecondary text-center text-base tracking-[0.15px] py-[9px] px-[25px]">
          <span>🚀</span> Best value
        </span>
      )}

      {!isSaleEnded && (
        <div className=" hidden lg:flex bg-saleBlack gap-2.5 px-2 pt-5 pb-3 rounded-t-xl items-center justify-center">
          <Image
            src={"/images/timer-icon.svg"}
            width={24}
            height={24}
            alt="timer"
          />
          <p className=" uppercase text-lightYellow text-base tracking-[0.15px] font-semibold">
            SALE ENDS IN
          </p>
          <span className="uppercase text-lightYellow text-base tracking-[0.15px] font-semibold">
            {saleTime! < 3600
              ? new Date(saleTime! * 1000).toISOString().slice(14, 19)
              : new Date(saleTime! * 1000).toISOString().slice(11, 19)}
          </span>
        </div>
      )}

      <div
        className={clsx(
          " bg-white h-full rounded-xl overflow-hidden flex items-center gap-2 pl-3 pr-4 pb-2 pt-3",
          !isSaleEnded && " lg:rounded-t-none"
        )}
      >
        <span
          className={clsx(
            " w-5 h-5 min-w-5 min-h-5 rounded-full transition-colors duration-300",
            selected
              ? "bg-green bg-check bg-no-repeat bg-center [background-size:19.56px_19.56px]"
              : "border-2 bg-transparent border-textMain"
          )}
        />
        <p className=" text-[17px] leading-6 font-bold text-textSecondary tracking-[0.15px]">
          {product.label}
        </p>
        <div className="flex grow flex-col items-end gap-0.5">
          {product.prev_price && (
            <span className="text-xs leading-5 text-end line-through decoration-red text-textSecondary tracking-[0.5px]">
              {formatPrice(product.prev_price)}
            </span>
          )}
          <span className="text-xl leading-6 text-end text-blue font-bold tracking-[0.1px]">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs leading-5 text-textSecondary text-end tracking-[0.1px]">
            {product.per_text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
