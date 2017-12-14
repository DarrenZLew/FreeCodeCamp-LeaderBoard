import React, { Component } from 'react';
import axios from 'axios';
import Leaderboard from './components/Leaderboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alltime: [],
      days30: [],
      column: "alltime"
    };
  }

  onHandleColumn = (value) => {
    value === "days30" ? this.setState({ column: "days30"}) : this.setState({ column: "alltime"}); 
  }

  componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function(res) {
        this.setState({ days30: res.data})
      }.bind(this))      
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(function(res) {
        this.setState({ alltime: res.data})
      }.bind(this))         
  }

  render() {
    return (
      <div className="App">
        <Leaderboard alltime={this.state.alltime} days30={this.state.days30} column={this.state.column} onSelectColumn={this.onHandleColumn} />
      </div>
    );
  }
}

export default App;
