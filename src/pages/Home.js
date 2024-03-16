import Component from "../core/Component.js";
import router from "../utils/router.js";

class Home extends Component {
  setEvent() {
    document.querySelector(".btn_to_record").addEventListener("click", (e) => {
      router.navigate("/record");
    });
  }
}

export default Home;
