import React from "react";
import "./App.css";
import ThreadFrom from "./components/forms/ThreadForm";
import Catalog from "./components/Catalog";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Thread from "./components/Thread";

function App() {
  return (
    <div className="App">
      {/* <ThreadFrom />
      <Catalog /> */}
      <Router>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/threadForm" component={ThreadFrom} />
        <Route exact path="/thread" component={Thread} />
      </Router>
    </div>
  );
}

export default App;
