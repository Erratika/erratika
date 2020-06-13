import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import './App.scss'
import './components/Section'
import Section from "./components/Section";

class App extends Component {
	constructor(props: {}) {
		super(props);

		this.state = {};
	}

	render() {
		return <div className="App">
      <Home></Home>
      <Navbar></Navbar>
      <main>
        <Section title="About" sectionContent={<About/>}></Section>
        <Section title="Projects" sectionContent={<Projects/>}></Section>
        <Section title="Contact" sectionContent={<Contact/>}></Section>
      </main>

    </div>;
	}
}

export default App;
