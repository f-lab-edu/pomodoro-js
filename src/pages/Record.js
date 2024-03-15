import Component from "../core/Component.js";
class Record extends Component {
  template() {
    const div = document.createElement("div");
    const home = document.createElement("a");
    home.innerHTML = `<a href="/">home</a>`;
    const date = document.createElement("p");
    const today = new Date();
    date.innerText = this.props
      ? this.props.date
      : `${String(today.getMonth() + 1).padStart(2, "0")}${today.getDate()}`;
    div.appendChild(home);
    div.appendChild(date);
    return div;
  }
}

export default Record;
