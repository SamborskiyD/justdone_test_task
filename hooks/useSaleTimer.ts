import { useEffect, useState } from "react";

interface useSaleTimerProps {
  variant: string;
  initialTime?: number;
}

export const useSaleTimer = ({
  variant,
  initialTime = 60,
}: useSaleTimerProps) => {
    
  const [isSaleEnded] = useState(() => {
    const saleEnded = localStorage.getItem("saleEnded") === "true";
    if (variant === "control" && !saleEnded) {
      localStorage.setItem("saleEnded", "true");
      return true;
    }
    return saleEnded;
  });

  const [saleTime, setSaleTime] = useState(
    Number(localStorage.getItem("saleTime")) || initialTime
  );

  useEffect(() => {
    if (isSaleEnded) return;

    const interval = setInterval(() => {
      setSaleTime((prevTime) => {
        if (prevTime > 0) {
          const newTime = prevTime - 1;
          localStorage.setItem("saleTime", newTime.toString());
          return newTime;
        } else {
          localStorage.setItem("saleEnded", "true");
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSaleEnded]);

  return { saleTime, isSaleEnded };
};
