import React from "react";
import styles from "../common.scss";
//import styles from "./Bio.scss";


const Bio = (props) => {
  console.log(styles);
  return (
    <div className={styles.infoContainer}>
      <h2>Bio:</h2> <p>{props.bio}</p>
    </div>
  );
};

export default Bio;