import React from "react";
import styles from "../common.scss";

const BioInput = (props) => {
  var defaultValue = props.defaultValue;
  
    return (
      <div className={styles.infoContainer}>
      <h2>Bio</h2> 
      <textarea rows="4" cols="50" className={styles.textInput} defaultValue={defaultValue}></textarea>
    </div>
  )
}

export default BioInput;