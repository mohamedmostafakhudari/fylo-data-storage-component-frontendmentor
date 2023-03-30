import { useState } from "react";
import Main from "./sections/Main";
function App() {
  return (
    <div className="App font-body relative">
      <Main />
      <footer className="absolute bg-veryDarkBlue inset-x-0 text-white text-center">
        <div>
          &copy; <span>Mohamed Mostafa</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
