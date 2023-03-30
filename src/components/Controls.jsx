import React from "react";

export default function Controls() {
  return (
    <div className="bg-darkBlue p-12 rounded-lg rounded-tr-[100px] md:min-w-[350px]">
      <div>
        <img src="./assets/images/logo.svg" alt="logo" />
      </div>
      <div className="flex gap-4 mt-10">
        <div className="bg-veryDarkBlue w-14 h-14 rounded-lg flex items-center justify-center">
          <img src="./assets/images/icon-document.svg" alt="document" />
        </div>
        <div className="bg-veryDarkBlue w-14 h-14 rounded-lg flex items-center justify-center">
          <img src="./assets/images/icon-folder.svg" alt="folder" />
        </div>
        <div className="bg-veryDarkBlue w-14 h-14 rounded-lg flex items-center justify-center">
          <img src="./assets/images/icon-upload.svg" alt="upload" />
        </div>
      </div>
    </div>
  );
}
