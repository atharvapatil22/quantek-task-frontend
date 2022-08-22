import axios from "axios";
import React, { useState } from "react";
import styles from "./Home.module.css";
import { BaseURL } from "../../environment";

function Home() {
  const [inputHtml, setInputHtml] = useState("");

  const handleSubmit = () => {
    axios
      .post(BaseURL + "/parse-html", { inputHtml: inputHtml })
      .then((res) => {
        console.log("Res", res);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Find Similar Nodes</h1>
      <h3>Paste HTML in textbox below</h3>

      <textarea
        value={inputHtml}
        onChange={(e) => setInputHtml(e.target.value)}
      />
      <button onClick={handleSubmit}>Process Code</button>
    </div>
  );
}

export default Home;
