import React, { Component } from "react";
import Header from "./components/Header";
import Mainprocess from "./components/Mainprocess";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import villains from "./villain.json";


class App extends Component {
  // Setting this.state.villains to the villains json array
  state = {
    villains
  };
  
  // Map over this.state.villainss and render a Section component for each villain object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Header />
        <Mainprocess />
        <Footer />
      </Wrapper>
    );
  }
}
    
export default App;
