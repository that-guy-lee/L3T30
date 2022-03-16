//This is the results page, it will show the search results
import "../App.css";
import React, { Component } from "react";

export default class Results extends Component {
  constructor(props) {
    super(props);
    //Set states based on props that were passed in
    this.state = {
      githubItems: props.githubItems,
      gitlabItems: props.gitlabItems,
    };
  }

  render() {
    if (    //If there are results for github and gitlab
      this.state.githubItems.message !== "Not Found" &&
      this.state.gitlabItems.length !== 0 && this.state.gitlabItems.message !== "404 User Not Found"
    ) {
      return (
        <div>
          <div className="container">
            <div className="content">
              <h1>GitHub</h1>

              <table>
                <tr>
                  <td class="leftColumn">
                    <img
                      src={this.state.githubItems[0].owner.avatar_url}
                      alt={this.state.githubItems[0].owner.login}
                    ></img>
                    <a href={this.state.githubItems[0].owner.html_url}>
                      <h2>{this.state.githubItems[0].owner.login}</h2>
                    </a>
                  </td>
                  <td>
                    <h2>Repos:</h2>

                    {this.state.githubItems.map((value, index) => {
                      return (
                        <div>
                          <h3>
                            <a href={value.html_url}>{value.name}</a>
                          </h3>
                          <h4>Description: {value.description}</h4>
                          <h4>Created: {value.created_at}</h4>
                          <h4>Updated: {value.updated_at}</h4>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              </table>
            </div>

            <div className="content">
              <h1>GitLab</h1>

              <table>
                <tr>
                  <td class="leftColumn">
                    <img
                      src={this.state.gitlabItems[0].namespace.avatar_url}
                      alt={this.state.gitlabItems[0].namespace.name}
                    ></img>
                  </td>
                  <td>
                    <h2>Repos:</h2>

                    {this.state.gitlabItems.map((value, index) => {
                      return (
                        <div>
                          <h3>
                            <a href={value.web_url}>{value.name}</a>
                          </h3>
                          <h4>Description: {value.description}</h4>
                          <h4>Created: {value.created_at}</h4>
                          <h4>Updated: {value.last_activity_at}</h4>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      );
    } else if (   //else if there are results from github but not gitlabs
      this.state.githubItems.message !== "Not Found" &&
      (this.state.gitlabItems.length === 0 || this.state.gitlabItems.message === "404 User Not Found")
    ) {
      return (
        <div>
          <div className="container">
            <div className="content">
              <h1>GitHub</h1>

              <table>
                <tr>
                  <td class="leftColumn">
                    <img
                      src={this.state.githubItems[0].owner.avatar_url}
                      alt={this.state.githubItems[0].owner.login}
                    ></img>
                    <a href={this.state.githubItems[0].owner.html_url}>
                      <h2>{this.state.githubItems[0].owner.login}</h2>
                    </a>
                  </td>
                  <td>
                    <h2>Repos:</h2>

                    {this.state.githubItems.map((value, index) => {
                      return (
                        <div>
                          <h3>
                            <a href={value.html_url}>{value.name}</a>
                          </h3>
                          <h4>Description: {value.description}</h4>
                          <h4>Created: {value.created_at}</h4>
                          <h4>Updated: {value.updated_at}</h4>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              </table>
            </div>

            <div className="content">
              <h1>GitLab</h1>
              <br></br>
              <h2>
                Either the user doesn't exist or doesn't have any projects
              </h2>
            </div>
          </div>
        </div>
      );
    } else if (   //Else if there are results from gitlab but not github
      this.state.githubItems.message === "Not Found" &&
      this.state.gitlabItems.length !== 0 &&  this.state.gitlabItems.message !== "404 User Not Found"
    ) {
      return (
        <div>
          <div className="container">
            <div className="content">
              <h1>GitHub</h1>
              <br></br>
              <h2>
                Either the user doesn't exist or doesn't have any repos
              </h2>
            </div>
            <div className="content">
              <h1>GitLab</h1>

              <table>
                <tr>
                  <td class="leftColumn">
                    <img
                      src={this.state.gitlabItems[0].namespace.avatar_url}
                      alt={this.state.gitlabItems[0].namespace.name}
                    ></img>
                  </td>
                  <td>
                    <h2>Repos:</h2>

                    {this.state.gitlabItems.map((value, index) => {
                      return (
                        <div>
                          <h3>
                            <a href={value.web_url}>{value.name}</a>
                          </h3>
                          <h4>Description: {value.description}</h4>
                          <h4>Created: {value.created_at}</h4>
                          <h4>Updated: {value.last_activity_at}</h4>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      );
    }else {   //Else if there are no results at all
      return (
        <div>
          <div className="container">
            <div className="content">
              <h1>GitHub</h1>
              <br></br>
              <h2>
                Either the user doesn't exist or doesn't have any repos
              </h2>
            </div>
            <div className="content">
              <h1>GitLab</h1>
              <br></br>
              <h2>
                Either the user doesn't exist or doesn't have any projects
              </h2>
            </div>
          </div>
        </div>
      );
    }
  }
}
