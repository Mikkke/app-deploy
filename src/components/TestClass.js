import React from "react";
import axios from "axios";

class TestClass extends React.Component {
  state = {
    advice: ""
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(response => {
        const { advice } = response.data.slip;
        console.log("advice :>> ", advice);
        this.setState({ advice });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="TestClass">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default TestClass;
