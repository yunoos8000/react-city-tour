import React, { Component } from "react";
import './TourList.scss'
import Tour from "../Tour/Tour";
import {tourData} from '../tourData'


export default class TourList extends Component {

    constructor(props){
        super(props);
        this.state ={
            tours:tourData
        }
    }
    
    delTour= (id)=> {
    
        const filterTour = this.state.tours.filter((item)=> item.id !== id);
        console.log(filterTour);
        this.setState({
            tours : filterTour
        })
        
    };

  render() {
    //   console.log(this.state.tours);
      
    return (
      <section className="tourlist">
        {this.state.tours.map(item => (<Tour key={item.id} tour={item}  delTour={()=>this.delTour(item.id)} />))}
      </section>
    );
  }
}
