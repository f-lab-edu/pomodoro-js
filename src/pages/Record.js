import Component from "../core/Component.js";
import router from "../utils/router.js";

class Record extends Component {
  setEvent() {
    document.querySelector(".btn-to-home").addEventListener("click", (e) => {
      router.navigate("/");
    });
  }
  mount() {
    const pTag = document.querySelector(".date-info");
    const { date } = router.getPathParams();
    const today = new Date();
    if (date) {
      pTag.innerText = date;
    } else {
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      pTag.innerText = mm + dd;
    }
  }
}

export default Record;
