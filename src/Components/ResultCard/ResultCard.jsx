import React from "react";
import styles from "./ResultCard.module.css";

function ResultCard({ data }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.render_element}
        dangerouslySetInnerHTML={{ __html: data.node }}
      ></div>
      <div className={`text-xl p-4 ${styles.attributes}`}>
        <h2 className="font-bold mt-2">Name</h2>
        <p className="mt-2">{data.name}</p>
        <h2 className="font-bold mt-2">Occurances</h2>
        <p className="mt-2">{data.count}</p>
      </div>
    </div>
  );
}

export default ResultCard;
