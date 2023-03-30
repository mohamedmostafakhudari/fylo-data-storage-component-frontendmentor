import React from "react";
import { useState, useEffect } from "react";
export default function ProgressBar({ minValue, maxValue, percentage }) {
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    setCurrentWidth(percentage);
  }, [percentage]);
  return (
    <div className="relative h-5 rounded-full bg-veryDarkBlue">
      <div
        className="absolute bg-gradient-to-r from-gradientColor1 to-gradientColor2 h-full rounded-full w-0 duration-200 ease-in-out"
        style={{
          width: currentWidth + "%",
        }}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full right-1 top-1/2 -translate-y-1/2 ${
            percentage < 4 && "hidden"
          }`}
        ></div>
      </div>
      <div className="absolute text-white top-full left-0 translate-y-2 font-bold">
        {minValue} GB
      </div>
      <div className="absolute text-white top-full right-0 translate-y-2 font-bold">
        {maxValue} GB
      </div>
    </div>
  );
}
