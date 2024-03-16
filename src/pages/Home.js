import Component from "../core/Component.js";
import router from "../utils/router.js";

class Home extends Component {
  template() {
    const div = document.createElement("div");
    const home = document.createElement("button");
    home.innerText = `home`;
    home.addEventListener("click", (e) => {
      router.navigate("/");
    });
    const smallDiv = document.createElement("div");
    const record = document.createElement("button");
    record.innerText = `record`;
    record.addEventListener("click", (e) => {
      router.navigate("/record/123");
    });
    smallDiv.appendChild(record);
    div.appendChild(home);
    div.appendChild(smallDiv);
    return div;
  }
}

export default Home;
