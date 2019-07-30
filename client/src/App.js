import React from 'react';
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import BankList from './BankList';
import './App.css';



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
        </Router>
      </main>
    </div>
  );
}

export default App;

