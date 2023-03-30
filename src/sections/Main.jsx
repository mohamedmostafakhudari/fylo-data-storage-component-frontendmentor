import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Controls from "../components/Controls";
import Storage from "../components/Storage";
export default function Main() {
  const { width } = useWindowSize();
  const bgStyle = {
    backgroundImage: `url(${
      width > 375
        ? "./assets/images/bg-desktop.png"
        : "./assets/images/bg-mobile.png"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${width > 375 ? "100% 50%" : "cover"}`,
    backgroundPosition: `${width > 375 ? "0% 100%" : "center"}`,
  };
  return (
    <main className="min-h-screen bg-veryDarkBlue" style={bgStyle}>
      <div className="container mx-auto flex flex-col justify-center min-h-screen px-6 md:p-0 md:max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <Controls />
          <Storage />
        </div>
      </div>
    </main>
  );
}
