import React, { Component } from 'react'
import './App.css';
import Counter from './Counter'
import NavBar2 from './NavBar2'
import About from './About'
import webBackground from './Images/Web-background.png'
import mobileBackground from './Images/Mobile-background.png'

const eventURL = '/events'


class App extends Component {

  state = {
    counter: true,
    events: null
    // about: false
  }

  fetchEvents = () => {
    fetch(eventURL)
      .then(resp => resp.json())
      .then(events => this.setState({ events }))
  }

  componentDidMount() {
    this.fetchEvents()
  }


  renderComponent = () => {
    if (this.state.counter && this.state.events) {
      return <Counter number={this.state.events.length} />
    } else if (this.state.counter) {
      return null
    } else {
      return <About />
    }
  }

  clickAbout = () => {
    this.setState({ counter: false })
  }

  clickHome = () => {
    this.setState({ counter: true })
  }

  // changeComponent = () => {
  //   this.setState({ counter: !this.state.counter })
  // }
  render() {
    return (
      <div className="App">
        <NavBar2 clickAbout={this.clickAbout} clickHome={this.clickHome} />
        {this.renderComponent()}

      </div>
    );
  }
}


export default App;
