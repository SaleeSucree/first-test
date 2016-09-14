import React from "react";
import styles from "./Title.scss";

const Title = (props) => {
  return (
    <div className={styles.infoContainer}>
    <h2>Username</h2> <p>{props.name}</p>
    </div>
    )
};

export default Title;