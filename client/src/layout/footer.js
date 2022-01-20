import { Component } from "react";

const footerStyles = {
  width: "fit-content",
  borderRadius: 15,
};

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-info text-white p-1 m-auto" style={footerStyles}>
        &copy; 2022 Holger Mueller
      </footer>
    );
  }
}
