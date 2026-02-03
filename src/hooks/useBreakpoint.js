import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [bp, setBp] = useState("mobile");

  useEffect(() => {
    const handler = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) setBp("xl");
      else if (window.matchMedia("(min-width: 1024px)").matches) setBp("lg");
      else if (window.matchMedia("(min-width: 768px)").matches) setBp("md");
      else if (window.matchMedia("(min-width: 640px)").matches) setBp("sm");
      else setBp("mobile");
    };

    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return bp;
}