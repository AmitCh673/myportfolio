import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPGa8LCaH2uF6G6fTMRPFpMuldCs1SZQj6jbFeJDGFN4UzfPc&s"
              alt="Avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Front End Web Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | Javascript | React js </p>
              <div className="social-links">
                {/* linkedin */}
                <a href="https://google.com" target="_blank">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                {/* github */}
                <a href="https://google.com" target="_blank">
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
