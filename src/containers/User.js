import React, { Component } from 'react';
import Title from "../components/Title";
import Bio from "../components/Bio";

/*
User: {
  fullname: "Simone Potenza"
  bio: "I am simone, software engineer and more",
  jobs: [
    {
      startYear: 2005,
      endYear: 2008,
      schoolName: "L'Aquila University"
    },
    {
      startYear: 2010,
      endYear: 2014,
      schoolName: "Vrije Universiteit Amsterdam"
    }
  ]
}

*/
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
            schoolName: "L'Aquila University"
          },
          {
            startYear: 2010,
            endYear: 2014,
            schoolName: "Vrije Universiteit Amsterdam"
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <Title name={this.state.user.fullname} />
        <Bio bio={this.state.user.bio} />
      </div>
    );
  }
}
