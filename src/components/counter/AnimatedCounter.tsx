"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.toString());
    if (start === end) return;

    const duration = 2000; // total animation time in ms
    const incrementTime = 30; // interval time
    const steps = Math.ceil(duration / incrementTime);
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
};

export default AnimatedCounter;
