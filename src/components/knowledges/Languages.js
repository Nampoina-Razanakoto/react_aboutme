import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:0.8},
            {id: 2, value: "Pascal", xp:1.9},
            {id: 3, value: "C", xp:1.9},
            {id: 4, value: "Java", xp:0.3},
        ],
        frameworks: [
            {id: 1, value: "React", xp:0.2},
            {id: 2, value: "WordPress", xp:1.3},
            {id: 3, value: "Sass", xp:0.16},
            {id: 4, value: "Bootstrap", xp:1.1},
        ]
    }
     
  render() {
    let {languages, frameworks} = this.state;


    return (
      <div className="languagesFrameworks">
          <ProgressBar 
                languages={languages}
                className="languagesDisplay"
                title="languages"
            />
          <ProgressBar 
                languages={frameworks}
                title="frameworks & bibliotheques"
                className="frameworksDisplay"
          
            />
      </div>
    );
  }
}

export default Languages;