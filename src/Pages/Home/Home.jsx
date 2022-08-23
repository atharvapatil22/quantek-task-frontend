import axios from "axios";
import React, { useState } from "react";
import styles from "./Home.module.css";
import { BaseURL } from "../../environment";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [inputHtml, setInputHtml] = useState("");

  const handleSubmit = () => {
    if (!inputHtml) {
      alert("Please enter some valid html!");
      return;
    }

    axios
      .post(BaseURL + "/parse-html", { inputHtml: inputHtml })
      .then((res) => {
        console.log("Res", res.data);
        navigate("results", { state: { nodeList: res.data } });
      })
      .catch((err) => {
        alert("Some error occured");
        console.log("Err", err);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className="font-bold">Find Similar Nodes</h1>
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
