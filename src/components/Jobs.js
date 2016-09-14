import React from "react";
import styles from "./Jobs.scss";

const Jobs = (props) => {
   var jobs = props.jobs;
  


  var jobListItems = jobs.map(function(job){
    var startYear = job.startYear;
    var endYear = job.endYear;
    var jobTitle = job.jobTitle;
    var jobDescription = job.jobDescription;

    return (
    <li>
      <h3> {startYear} - {endYear} </h3>
      <p>
      {jobTitle} <br />
      {jobDescription}
      </p>
    </li>
    )}
    );
  
  return (
    <div className={styles.jobContainer}>
      <h2>Jobs</h2>
      <ul>
        {jobListItems}
      </ul>
    </div>
  )
}

export default Jobs;