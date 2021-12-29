import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Background from "../../img/bBg.jpg";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "9c41e19714ac2e8e98a9",
      clientSecret: "569bc896e4bf15ff108872e18f879380a27c4b32",
      count: 5,
      sort: "created: asc",
      repos: [],
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map((repo) => (
      <div
        key={repo.id}
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
        className="card card-body mb-2 border border-info"
      >
        <div className="row">
          <div className="col-md-6">
            <h4>
              <a
                href={repo.html_url}
                rel="noreferrer"
                className="text-info"
                target="_blank"
              >
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="text-white" ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;
