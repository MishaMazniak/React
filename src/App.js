import React from "react";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <Header title="List of users" />
      </div>
    );
  }
}

export default App;
