import React, { Component } from 'react';
// import axios from 'axios';
import SearchBar from "material-ui-search-bar";
import List from './ResultBody'

import {connect} from 'react-redux';
import api from '../api'

class App extends Component {
    state = {value:'', data:[]}
    search(data){
      if (this.props.switch.state === "SWITCH_ON"){
        console.log("on case")
        api.post(`search?search=${data}`).then((response) =>{
          this.setState({data: response.data.hits.hits})
        }).catch((error) => {
          console.log(error);
        })
      } else if (this.props.switch.state === "SWITCH_OFF"){
        api.post(`search`, {
          "query": {
            "match": {
              "filename": `${data}`
            }
          }
        }).then((response) =>{
          this.setState({data: response.data.hits.hits})
        }).catch((error) => {
          console.log(error);
        })
      }
    }
  render() {
    return (
        <div>
        <SearchBar
          value={this.state.value}
          onChange={(newValue) => this.setState({ value: newValue })}
          onRequestSearch={() => this.search(this.state.value)}
          placeholder={"Type & Enter to Search"}
        />
        <List searchResult={this.state.data} />
        </div>
      );
  }
}

const MapStateToProps = (state) => {
  return {
  switch: state.switch
};
};

export default connect(MapStateToProps)(App);



