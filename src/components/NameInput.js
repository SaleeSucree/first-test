import React from "react";
import styles from "../common.scss";

const NameInput = (props) => {
  var props = props;
  var nameValue= props.nameValue;
  
  //console.log(handleChange);
  

  return (
    <div className={styles.infoContainer}>
      <h2>Username</h2> 
      <input type="text" onChange={props.onChange} value={nameValue} className={styles.textInput} />
    </div>
    )
}

export default NameInput;

