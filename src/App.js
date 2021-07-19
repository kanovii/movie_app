import React from "react";
import Potato from "./Potato";
import PropTypes from "prop-types";
import "./App.css";



class App extends React.Component {
  state = {
    isLoading: true,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    },3000);
  }
  render() {
    const {isLoading} = this.state;

    return (
      <div>
        {isLoading ? "Loading..." : "we are ready"}
      </div>
      
    )
  }
}

export default App;

