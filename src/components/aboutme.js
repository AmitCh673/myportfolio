import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import Education from "./education";
import Experience from "./Experience";
class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdE1RpJGgCUozv0-m8q0wcyj0YHDP-lcA8KOs4VrCN_lN_mwXQ6Q&s"
                alt="Avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "0em", textAlign: "center" }}>
              Amit Chaturvedi
            </h2>
            <h4
              style={{ color: "grey", paddingTop: "0em", textAlign: "center" }}
            >
              Front End Developer
            </h4>
            <hr
              style={{
                borderTop: "5px solid lightblue",
                width: "100%"
              }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis iste at modi voluptas quae aperiam magni ratione,
              mollitia, laboriosam dignissimos delectus cumque. Eos voluptatum
              laboriosam corporis fugit quas quis pariatur.
            </p>

            <hr style={{ borderTop: "5px solid lightblue", width: "100%" }} />
            <h5>Address</h5>
            <p>oyo life blr1683 Banglore Karnataka</p>
            <h5>phone</h5>
            <p>12345657891</p>
            <h5>Email</h5>
            <p>some@gmail.com</p>
            <hr style={{ borderTop: "5px solid lightblue", width: "100%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2011}
              endYear={2012}
              schoolName="Green field Academy/ X"
              marks="81.6%"
            />
            <Education
              startYear={2014}
              endYear={2019}
              schoolName="Green Field Academy/ XII"
              marks="79.8%"
            />
            <Education
              startYear={2014}
              endYear={2019}
              schoolName="SRM University/ B-Tech"
              marks="71.4%"
            />
            <hr
              style={{ color: "blue", paddingTop: "0em", textAlign: "center" }}
            />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2022}
              jobName="Associate Software Developer Trainee"
              JobDescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            />
            <hr style={{ borderTop: "5px solid lightblue", width: "100%" }} />
            <h2>Skills</h2>
            <h5>
              HTML
              <ProgressBar style={{ marginTop: "1em" }} progress={80} />
            </h5>
            <h5>
              CSS <ProgressBar style={{ marginTop: "1em" }} progress={80} />
            </h5>
            <h5>
              Javascript{" "}
              <ProgressBar style={{ marginTop: "1em" }} progress={70} />
            </h5>
            <h5>
              React js{" "}
              <ProgressBar style={{ marginTop: "1em" }} progress={60} />
            </h5>
            <h5>
              mySql <ProgressBar style={{ marginTop: "1em" }} progress={80} />
            </h5>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default About;
