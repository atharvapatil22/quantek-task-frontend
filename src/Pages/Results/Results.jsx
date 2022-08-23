import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ResultCard from "../../Components/ResultCard/ResultCard";
import styles from "./Results.module.css";

function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const nodeList = location.state.nodeList;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className="font-bold">Results</h1>
        <button onClick={() => navigate(-1)}>Run Again</button>
      </div>
      {nodeList.length === 0 ? (
        <p className={styles.message}>No Duplicates found</p>
      ) : (
        <div
          style={{
            width: "100%",
          }}
        >
          {nodeList.map((item, index) => (
            <div
              key={index}
              className={styles.card_container}
              style={{
                justifyContent: index % 2 == 0 ? "start" : "end",
              }}
            >
              <ResultCard data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Results;
