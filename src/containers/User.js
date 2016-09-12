import React, { Component } from 'react';
import Title from "../components/Title";
import Bio from "../components/Bio";
import Jobs from "../components/Jobs";
import Button from "../components/Button";
import NameInput from "../components/NameInput";
import BioInput from "../components/BioInput";
import JobsInput from "../components/JobsInput";
import styles from "../common.scss";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fullname: "Anne Reibke",
        bio: "I am Anne, Learning development",
        jobs: [
          {
            startYear: 2005,
            endYear: 2008,
            jobTitle: "L'Aquila University",
            jobDescription: "I was a student here."
          },
          {
            startYear: 2010,
            endYear: 2014,
            jobTitle: "Vrije Universiteit Amsterdam",
            jobDescription: "I was a student here."
          }
        ],     
        inEditMode: false
      }

    };
  }

  buttonClicked(ModeState) {
    var currentName = this.state.user.fullname;
    var currentBio = this.state.user.bio; 
    var currentJobs = this.state.user.jobs; 
    var currentMode = !this.state.user.inEditMode;
    
    this.updateState (currentName, currentBio, currentJobs, currentMode);
    }
  
  
updateState(currentName, currentBio, currentJobs, currentMode) { 
    this.setState({user: {inEditMode: currentMode, 
                             fullname: currentName,
                             bio: currentBio,
                             jobs: currentJobs}});
  }
  
  
handleJobChange(notsure, fieldId, change){
    var currentName = this.state.user.fullname;
    var currentBio = this.state.user.bio; 
    var currentJobs = this.state.user.jobs; 
    var currentMode = this.state.user.inEditMode;
  
    var idSplit = fieldId.split("_");
    var jobNr = idSplit[0];
    var jobInfo = idSplit[1];

    currentJobs[jobNr][jobInfo] = change;

    this.updateState (currentName, currentBio, currentJobs, currentMode);
}
 
  
handleChange(event, changeType) {
      var currentName = this.state.user.fullname;
      var currentBio = this.state.user.bio; 
      var currentJobs = this.state.user.jobs; 
      var currentMode = this.state.user.inEditMode;


      switch (changeType) {
          case "nameChange":
            currentName = event.target.value;
            break;
          case "bioChange":
            currentBio = event.target.value;
            break;
          default:
            console.log("what happened?");
        }

        this.updateState (currentName, currentBio, currentJobs, currentMode);
  }
  
  
  render() {
    var jobsInputFields = [];
    for (var i = 0; i< this.state.user.jobs.length; i++) {

      var thisJobStartYear = this.state.user.jobs[i].startYear;
      var thisJobEndYear = this.state.user.jobs[i].endYear;
      var thisJobTitle = this.state.user.jobs[i].jobTitle;
      var thisJobDescription = this.state.user.jobs[i].jobDescription;
      
      jobsInputFields[i]= [{
       id: i+"_startYear",
       onChange: this.handleJobChange.bind(this, event),
       value: thisJobStartYear},
       {
       id: i+"_endYear",
       onChange: this.handleJobChange.bind(this, event),
       value: thisJobEndYear},
      {
       id: i+"_jobTitle",
       onChange: this.handleJobChange.bind(this, event),
       value: thisJobTitle}, 
       {
       id: i+"_jobDescription",
       onChange: this.handleJobChange.bind(this, event),
       value: thisJobDescription}] 
     }
    
    
    var JobInputList = jobsInputFields.map(function(job) {

          return (
            <div>
        <h3> Start year </h3>
        <JobsInput id={job[0].id} onChange={job[0].onChange} value={job[0].value} />
        <h3> End year </h3>
        <JobsInput id={job[1].id} onChange={job[1].onChange} value={job[1].value} />
        <h3> Job Title </h3>
        <JobsInput id={job[2].id} onChange={job[2].onChange} value={job[2].value} />
        <h3> Job Description </h3>
        <JobsInput id={job[3].id} onChange={job[3].onChange} value={job[3].value} />
            </div>
          )
      });
    


  
    var ModeState = this.state.user.inEditMode;
    
    return (

      <div>

      {this.state.user.inEditMode ? <NameInput nameValue={this.state.user.fullname} onChange={this.handleChange.bind(this, event, "nameChange")}/> : <Title name={this.state.user.fullname} /> }
      
      {this.state.user.inEditMode ? <BioInput bioValue ={this.state.user.bio} onChange={this.handleChange.bind(this, event, "bioChange")}/> : <Bio bio={this.state.user.bio} />}
        
      {this.state.user.inEditMode ? <div>{JobInputList}</div> : <Jobs jobs = {this.state.user.jobs} />
      }


    

      
        <button onClick={this.buttonClicked.bind(this, {ModeState})}> {this.state.user.inEditMode ? 'SAVE' : 'EDIT'} </button>

      </div>
    );
  }
}
