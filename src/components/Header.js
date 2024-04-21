import Component from "../core/Component.js";
import router from "../utils/router.js";

class Header extends Component {
  constructor(parent, props) {
    super(parent, props);
    this.name = "header";
  }
  setEvent() {
    const title = document.querySelector(".title");
    title.addEventListener("click", () => {
      router.navigate("/");
    });
    const moveButton = document.querySelector(".move-to-record");
    moveButton.addEventListener("click", () => {
      router.navigate("/record");
    });
  }
}

export default Header;
