import React from "react";
import styles from "../common.scss";

const BioInput = (props) => {
  var props = props;
  var bioValue= props.bioValue;
  
    return (
      <div className={styles.infoContainer}>
      <h2>Bio</h2> 
      <textarea rows="4" cols="50" className={styles.textInput} onChange={props.onChange} value={bioValue}></textarea>
    </div>
  )
}

export default BioInput;