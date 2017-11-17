import React, { Component } from 'react';

import './AllCataloguesView.css';
import Catalogue from './Catalogue.jsx'

import {GetIt} from '../helpers/helpers.jsx'

class AllCataloguesView extends Component {
  constructor(props){
    super(props);
    this.redirect = props.transition.router.stateService.go;
    localStorage.removeItem("lastresort");
    if(!localStorage.getItem("user_address")){
      this.redirect("home");
    }

    // TO - DO
    //this.loadFromStorage();
    this.state = {
      catalogues :  []
    }
    this.getCatalogues();
  }

  getCatalogues = () => {
    GetIt("/catalogues/" , "GET")
    .then(function(data){
      return data.json();
    })
    .then((data) => {
      this.allData = data;
      return data.map(function(object, index){
        return <Catalogue id={object.id} object={object} key={index} mode="minimal"></Catalogue>; 
      });
    })
    .then(
     (data) => { this.setState({catalogues : data}) }
    );
  }


  onDataChange = ( data ) =>{
    this.setState({
      catalogues : data
    });
  }

  render = () => {
    return (
      <div className="container all-catalogues-view">
        <div className="row justify-content-start">
           {/*<div className="col-12 col-md-4 col-lg-3 hidden-xs">
           <SearchFilters items={this.state.basketItems} onChange={this.onDataChange}/>
          </div>*/}
            {this.state.catalogues}
        </div>
      </div>
    );
  }
}
export default AllCataloguesView;