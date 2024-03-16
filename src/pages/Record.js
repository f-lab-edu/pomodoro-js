import Component from "../core/Component.js";
import router from "../utils/router.js";

class Record extends Component {
  template() {
    const div = document.createElement("div");
    const home = document.createElement("button");
    home.innerText = `home`;
    home.addEventListener("click", (e) => {
      router.navigate("/");
    });
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
