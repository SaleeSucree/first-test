import React from "react";
import styles from "../common.scss";


var handleClick = function(props) {
  if (props) {    
    
    // create inputs here
      }
    props = !props;
  console.log(props);
  return (props);
}

const Button = (props) => {
var props = props.userInfo;
  var inEditMode = props.inEditMode;
  console.log(props);

  //const buttonText = this.props.inEditMode ? 'SAVE' : 'EDIT';
  return (
      <div  // Why bind? Why this?
      className={styles.button}> 
        {handleClick.bind(this, inEditMode) ? 'SAVE' : 'EDIT'}
      </div>
    );
  }


export default Button;