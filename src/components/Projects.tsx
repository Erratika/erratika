import React, { Component } from "react";

const GITHUB_URL = "https://api.github.com/";
const GITHUB_USERNAME = "Erratika";

class Projects extends Component {
	constructor(props: {}) {
		super(props);

		this.state = {};
	}

	render() {
		return <div></div>;
  }
  
  getProjects(){
    fetch(GITHUB_URL + 'users/' + GITHUB_USERNAME +'/repos')


  }
}

export default Projects;
