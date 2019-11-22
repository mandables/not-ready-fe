import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import NavBar2 from "./NavBar2";
import About from "./About";
import Stats from "./Stats";
import Stats2 from "./Stats2";
import webBackground from "./Images/Web-background.png";
import mobileBackground from "./Images/Mobile-background.png";

// const eventURL = 'https://wedding-woes-backend.herokuapp.com/events';
// const devURL = 'localhost:3001/events';
// const statsURL = 'https://wedding-woes-backend.herokuapp.com/stats';
const eventURL = process.env.REACT_APP_API_ENDPOINT;

class App extends Component {
  state = {
    counter: true,
    events: null,
    about: false,
    stats: ""
  };

  fetchEvents = () => {
    return fetch(eventURL)
      .then(resp => resp.json())
      .then(events => this.setState({ events }));
  };

  fetchStats = () => {
    fetch(statsURL)
      .then(resp => resp.json())
      .then(stats => this.setState({ stats }));
  };

  componentDidMount() {
    this.fetchEvents();
    this.fetchStats();
  }

  renderComponent = () => {
    if (this.state.counter && this.state.events) {
      return <Counter number={this.state.events.length} />;
    } else if (this.state.counter) {
      return null;
    } else if (this.state.about) {
      return <About />;
    } else {
      return <Stats2 stats={this.state.stats} />;
    }
  };

  clickAbout = () => {
    this.setState({ counter: false, about: true });
  };

  clickHome = () => {
    this.setState({ counter: true, about: false });
  };

  clickStats = () => {
    this.setState({ counter: false, about: false });
  };

  // changeComponent = () => {
  //   this.setState({ counter: !this.state.counter })
  // }
  render() {
    return (
      <div className="App">
        <NavBar2
          clickAbout={this.clickAbout}
          clickHome={this.clickHome}
          clickStats={this.clickStats}
        />
        {this.renderComponent()}
      </div>
    );
  }
}

export default App;
