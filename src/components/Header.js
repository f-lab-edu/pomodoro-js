import Component from "../core/Component.js";

class Header extends Component {
  template() {
    const template = document.getElementById("header");
    const newNode = template.content.cloneNode(true);
    return newNode;
  }
}

export default Header;
