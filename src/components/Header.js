import Component from "../core/Component.js";
import router from "../utils/router.js";

class Header extends Component {
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
