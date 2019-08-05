import React from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import BankList from "./BankList";
import BranchList from "./BranchList";
import Local from "./Local";
import International from "./International";
// import BankForm from "./BankForm";
import "./App.css";

function App() {
  return (
    <div className="bank-app">
      <header className="bank-header">
        <Router>
          <NavBar default />
        </Router>
      </header>
      <main className="bank-main">
        <Router>
          <BankList path="/" />
          <Local path="/local" />
          <International path="/international" />
          <BranchList path="/branch" />
        </Router>
      </main>
    </div>
  );
}

export default App;
