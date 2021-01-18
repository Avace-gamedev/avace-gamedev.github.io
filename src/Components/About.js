import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var real_name = this.props.data.real_name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.city;
      var email = this.props.data.email;
      var resume = this.props.data.resume;
    }
    console.log(bio);

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{real_name}</span>
                  <br />
                  <span>{city}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resume} className="button">
                    <i className="fa fa-download"></i>Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
