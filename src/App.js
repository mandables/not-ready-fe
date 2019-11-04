import React, { Component } from 'react'
import './App.css';
import NavBar from './NavBar'
import Counter from './Counter'
import NavBar2 from './NavBar2'
import About from './About'


class App extends Component {

  state = {
    counter: true,
    // about: false
  }

  renderComponent = () => {
    if (this.state.counter) {
      return <Counter />
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
        {/* <NavBar /> */}
        <NavBar2 clickAbout={this.clickAbout} clickHome={this.clickHome} />
        {this.renderComponent()}

      </div>
    );
  }
}


export default App;
