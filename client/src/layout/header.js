import { Component } from "react";

const headerStyles = {
  width: "55%",
  margin: "8px",
};

export default class Header extends Component {
  render() {
    return (
      <h1 className="bg-info text-white p-1 m-auto" style={headerStyles}>
        Heard It!!
      </h1>
    );
  }
}
