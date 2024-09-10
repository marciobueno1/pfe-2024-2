import React, { useState, useEffect } from "react";
import "./App.css";
import { MeuComponente } from "./components/MeuComponente";

//pfe-2024-2.vercel.app/

https: function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <MeuComponente />
        <hr />
        <MeuComponente />
        <hr />
        <MeuComponente />
      </header>
    </div>
  );
}

export default Home;
