import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validations/is-empty";
import Background from "../../img/bBg.jpg";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName =
      profile.user.name && profile.user.avatar
        ? profile.user.name.trim().split(" ")[0]
        : null;

    // Skills list
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
            }}
            className="card card-body bg-light mb-3 border border-info"
          >
            <h3 className="text-center text-info">{firstName}'s Bio</h3>
            <p className="lead text-white">
              {isEmpty(profile.bio) ? (
                <span>{firstName} doest not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center text-white">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
