import Component from "../core/Component.js";
import router from "../utils/router.js";

class Record extends Component {
  setEvent() {
    document.querySelector(".btn_to_home").addEventListener("click", (e) => {
      router.navigate("/");
    });
  }
}

export default Record;
