import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
    constructor(props){
        super(props)
        this.state={
            infoStuts: false
        }
    }

    infoShow=()=>{
        console.log("YPAYPA");
        
        this.setState({
            infoStuts : !this.state.infoStuts
        })
    }
    

  render() {
    const { city, img, name, info } = this.props.tour;
    console.log(this.props);
    
    const { delTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img width="200px" src={img} alt="tour" />
          <span className="close-btn" onClick={delTour}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info {""}
            <span onClick={this.infoShow}  >
              <i className="fas fa-caret-square-down"  />
            </span>
          </h5>
          {this.state.infoStuts &&  <p> {info} </p>}
        </div>
      </article>
    );
  }
}
