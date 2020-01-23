import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  CardMenu,
  Button,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center/cover"
              }}
            >
              Robo Friends
            </CardTitle>
            <CardText>Lorem ipsum dolor sit amet consectetur adipi </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>Sourcecode</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center/cover"
              }}
            >
              MyPortFolio
            </CardTitle>
            <CardText>Lorem ipsum dolor sit amet consectetur adipi </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>Sourcecode</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/originals/32/c8/ef/32c8eff60238d9a62b1d97229a8beffa.png) center/cover"
              }}
            >
              Travelling Website
            </CardTitle>
            <CardText>Lorem ipsum dolor sit amet consectetur adipi </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>Sourcecode</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* project2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH5_7bVs1tyosSOTgqcxs0-aDn2atMp1pOajqOwkaYioEKTNg&s) center/cover"
              }}
            >
              Login page
            </CardTitle>
            <CardText>Lorem ipsum dolor sit amet consectetur adipi </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
              <Button colored>Sourcecode</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Reactjs</Tab>
          <Tab>HTML/css/Bootstrap</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
