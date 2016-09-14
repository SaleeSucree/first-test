import React from "react";
import styles from "./JobsInput.scss";

//const JobsInput = (props) => {
var JobsInput = React.createClass({
  
  update: function(event) {
    var change = event.target.value;
    
    console.log ("event target: " + event.target.value);
    console.log ("ref1" + this.props.id);

    this.props.onChange(this.props.id, change);
  },
  
  render: function() {

 
 //var jobInputs = this.props.jobsValue.map(function(job){
    return (
     
      <input onChange={this.update} value={this.props.value} id={this.props.id} />
      
  )
  }
  

/*  return (
    <div className={styles.infoContainer}>
    {console.log({jobInputs})}
    {jobInputs}
    </div> 
  );*/
    });

export default JobsInput;

