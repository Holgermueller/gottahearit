import { Component } from "react";
const navStyles = {
  borderTop: "2px solid black",
  borderBottom: "2px solid black",
};

export default class Nav extends Component {
  render() {
    return (
      <section id="navigation" className="m-2" style={navStyles}>
        <h5>Nav will go here...</h5>
      </section>
    );
  }
}
