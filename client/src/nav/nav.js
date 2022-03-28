import { Component } from "react";
import "./nav.css";

export default class Nav extends Component {
  render() {
    return (
      <section id="navigation" className="m-2">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Add an Item</a>
          </li>
          <li>
            <a href="#">Log Out</a>
          </li>
        </ul>
      </section>
    );
  }
}
