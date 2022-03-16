//This is the landing page, it will be where the user originally searches
import "../App.css";
import React, { Component } from "react";
import Results from "./Results";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    //Initialize states
    this.state = {
      username: "",
      isLoadedGithub: false,
      isLoadedGitlab: false,
      githubItems: {},
      gitlabItems: {},
      showResults: false,
    };
  }

  //Fetch inforamtion from API

  //Github
  componentDidMountGithub() {
    fetch("/search/github/" + this.state.username)
      .then((res) => res.json())
      .then((json) => {
        //Set isLoadedGithub and items state, with information from the API
        this.setState({
          isLoadedGithub: true,
          githubItems: json,
        });
      });
  }

  //Gitlabs
  componentDidMountGitlab() {
    fetch("/search/gitlab/" + this.state.username)
      .then((res) => res.json())
      .then((json) => {
        //Set isLoadedGitlab and items state, with information from the API
        this.setState({
          isLoadedGitlab: true,
          gitlabItems: json,
        });
      });
  }

  //When text is inputted change the state of "word"
  handleInput = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  //When the submit button is pressed, change the state of "showResults" to true
  handleSubmit = (event) => {
    this.componentDidMountGithub();
    this.componentDidMountGitlab();
    this.setState({
      showResults: true,
    });
    event.preventDefault();
  };

  render() {
    if (!this.state.showResults) {    //If show results is false - show the search page
      return (
        <div className="container">
          <div className="content">
            <h1>Search for a username</h1>

            <form onSubmit={this.handleSubmit}>
              <input
                type={"text"}
                value={this.state.username}
                onChange={this.handleInput}
              ></input>
              <br />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      );
    } else if (   //If showResults is true, and both github and gitlabs is loaded, call the results component
      this.state.showResults &&
      this.state.isLoadedGithub &&
      this.state.isLoadedGitlab
    ) {
      return (
        <div>
          <div className="container">
            <Results
              githubItems={this.state.githubItems}    //Pass in githubItems
              gitlabItems={this.state.gitlabItems}     //Pass in gitlabItems
            />
          </div>
        </div>
      );
    } else {    //Else, show the laoding screen
      return (
        <div>
          <div className="container">
            <div className="content">
              <h1>Loading</h1>

              <form onSubmit={this.handleSubmit}>
                <input
                  type={"text"}
                  value={this.state.username}
                  onChange={this.handleInput}
                ></input>
                <br />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}
