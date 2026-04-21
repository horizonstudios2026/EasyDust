import React from "react";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "./components/ui/sonner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
