import React, { Component } from 'react';

export default class Project extends Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {    /*info*/
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  handleExit = () => {   /*fonction retour info*/
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {
    let {name, info, picture} = this.props.item;

    return ( /*cartes*/
      <div className="project">
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {          /*affichage pop-up*/
          this.state.showInfo && (  
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                </div>

                <p className="text">{info}</p>
                <div className="button return" onClick={this.handleInfo}>Retour</div>
              </div>
            </div>
          )
        }

      </div>
    );
  }
}
