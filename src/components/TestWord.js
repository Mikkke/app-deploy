import React from "react";
import axios from "axios";

const TestWord = () => {
  const fetchCitation = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(res => console.log("res.data :>> ", res.data.slip.advice))
      .catch(error => console.log("error >> ", error));
  };
  fetchCitation();
  return (
    <div>
      <h1>Citation</h1>

      <button onClick={fetchCitation}>Citation</button>
    </div>
  );
};

export default TestWord;
