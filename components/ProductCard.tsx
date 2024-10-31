import clsx from "clsx";
import { formatPrice } from "../helpers/formatPrice";
import SaleTimer from "./SaleTimer";

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
  per_additional_text?: string;
}

interface ProductCardProps {
  onClick: () => void;
  selected: boolean;
  product: Product;
  isSaleEnded: boolean;
  saleTime: number;
}

const Badge = ({
  isPopular,
  discount,
}: {
  isPopular?: boolean;
  discount: string;
}) => {
  return (
    <span className="absolute font-semibold -translate-y-1/2 z-10 left-11 top-0 bg-green rounded-full text-white text-center text-xs leading-5 tracking-[0.1px] pl-2.5 py-1 pr-[9px]">
      {isPopular ? "Most Popular" : discount ? "Save " + discount + "%" : ""}
    </span>
  );
};

const BestValueBadge = () => {
  return (
    <span className="absolute flex items-center rotate-[4.26deg] top-0 right-[30px] -translate-y-[80%] z-10 font-semibold bg-yellow rounded-full text-textSecondary text-center text-base tracking-[0.15px] py-[9px] px-[25px]">
      <span>🚀</span> Best value
    </span>
  );
};

const ProductCard = ({
  selected,
  product,
  onClick,
  isSaleEnded,
  saleTime,
}: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        " rounded-2xl bg-white w-full flex flex-col relative border-4 cursor-pointer transition-colors duration-300",
        selected ? " border-green" : " border-lightGreen"
      )}
    >
      <Badge isPopular={product?.isPopular} discount={product.discount} />
      {product.isBestValue && <BestValueBadge />}

      <SaleTimer
        className="hidden lg:flex"
        isSaleEnded={isSaleEnded}
        saleTime={saleTime}
        withArrow
      />

      <div
        className={clsx(
          "h-full rounded-xl overflow-hidden flex items-center gap-2 pl-3 pr-4 pb-2 pt-3"
        )}
      >
        <span
          className={clsx(
            " w-5 h-5 min-w-5 min-h-5 rounded-full transition-colors duration-300",
            selected
              ? "bg-green bg-check bg-no-repeat bg-center"
              : "border-2 bg-transparent border-textMain"
          )}
        />
        <p className=" text-[17px] leading-6 font-bold text-textSecondary tracking-[0.15px]">
          {product.label}
        </p>
        <div className="flex grow flex-col items-end gap-0.5">
          {product.prev_price && (
            <span className="text-xs leading-5 text-end line-through decoration-red text-textSecondary tracking-[0.5px]">
              {formatPrice(product.prev_price, product.currency)}
            </span>
          )}
          <span className="text-xl leading-6 text-end text-blue font-bold tracking-[0.1px]">
            {formatPrice(product.price, product.currency)}
          </span>
          <span className="text-xs leading-5 text-textSecondary text-end tracking-[0.1px]">
            {product.per_additional_text
              ? product.per_additional_text + " per " + product.regularity
              : "Per " + product.regularity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
