import Component from "../core/Component.js";
import router from "../utils/router.js";

class Home extends Component {
  template() {
    const home = document.createElement("a");
    home.innerHTML = `<a href="/record">record</a>`;
    home.addEventListener("click", (e) => {
      e.preventDefault();
      router.navigate("/record");
    });
    return home;
  }
}

export default Home;
