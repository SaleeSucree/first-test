import React from "react";
import styles from "../common.scss";

const Jobs = (props) => {
   var jobs = props.jobs;
  


  var jobListItems = jobs.map(function(job){
    var startYear = job.startYear;
    var endYear = job.endYear;
    var jobTitle = job.jobTitle;
    var jobDescription = job.jobDescription;

    return (
    <li className={styles.jobItem}>
      <h3> {startYear} - {endYear} </h3>
      {jobTitle} <br />
      {jobDescription}
    </li>
    )}
    );
  
  return (
    <div className={styles.infoContainer}>
      <h2>Jobs</h2>
      <ul>
        {jobListItems}
      </ul>
    </div>
  )
}

export default Jobs;