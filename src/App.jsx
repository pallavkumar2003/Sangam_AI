import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
      <>
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </>
  );
}

export default App;
