import React from "react";
import styles from "../common.scss";

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

      <div>
      <input onChange={this.update} value={this.props.value} id={this.props.id} />

      </div>
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



      /* What was in the render before
      <h2>Start Year</h2>
      <input type="text" onChange={this.update} value={job.startYear} className={styles.textInput} /> 
      <h2>End Year</h2> 
      <input id="hello" type="text" onChange={this.update} value={job.endYear} className={styles.textInput} /> 
      <h2>Job Title</h2> 
      <input type="text" onChange={this.update} value={job.jobTitle} className={styles.textInput} /> 
      <h2>Job Description</h2> 
      <textarea rows="4" cols="50" onChange={this.update} value={job.jobDescription} className={styles.textInput}></textarea>;*/