import React from "react";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
export default function Storage() {
  const [currentStorageSize, setCurrentStorageSize] = useState(185);
  const maximumStorage = 1000;

  return (
    <div className="bg-darkBlue p-10 pb-0 text-center rounded-lg md:self-end md:pb-16 md:flex-1 md:relative">
      <p className="text-paleBlue">
        You've used <span className="text-white font-bold">815 GB</span> of your
        storage
      </p>
      <div className="mt-6">
        <ProgressBar
          minValue={0}
          maxValue={1000}
          percentage={Math.round(
            ((maximumStorage - currentStorageSize) / 1000) * 100
          )}
        />
      </div>
      <div className="bg-white p-5 px-8 rounded-lg w-fit flex items-center mx-auto translate-y-1/2 md:hidden">
        <span className="text-black font-bold text-6xl">
          {currentStorageSize}
        </span>
        <span className="uppercase text-grayishBlue font-bold ml-2">
          gb left
        </span>
      </div>
      <div className="bg-white p-3 px-5 rounded-lg w-fit items-center mx-auto hidden absolute bottom-full translate-y-1/4 right-8 md:flex">
        <div className="absolute w-0 border-[20px] border-transparent border-r-white top-full -translate-y-1/2 right-0"></div>
        <span className="text-black font-bold text-4xl">
          {currentStorageSize}
        </span>
        <span className="uppercase text-grayishBlue text-sm font-bold ml-2">
          gb left
        </span>
      </div>
    </div>
  );
}
