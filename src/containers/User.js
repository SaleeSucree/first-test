import React, { Component } from 'react';
import Title from "../components/Title";
import Bio from "../components/Bio";
import Jobs from "../components/Jobs";
import Button from "../components/Button";
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
    var oldName = this.state.user.fullname;
    var oldBio = this.state.user.bio; 
    var oldJobs = this.state.user.jobs; 
    var newMode = !this.state.user.inEditMode;
      
      this.setState({user: {inEditMode: newMode, 
                           fullname: oldName,
                           bio: oldBio,
                           jobs: oldJobs}});
            
        console.log(this.state.user.inEditMode);
    console.log(this.state.user.fullname);
    this.forceUpdate();
    }
  
  render() {
    var ModeState = this.state.user.inEditMode;
    return (

      <div>
        <Title name={this.state.user.fullname} />
        <Bio bio={this.state.user.bio} />
        <Jobs jobs={this.state.user.jobs} />
        <button onClick={this.buttonClicked.bind(this, {ModeState})}> {this.state.user.inEditMode ? 'SAVE' : 'EDIT'} </button>
      </div>
    );
  }
}
