import Component from "../core/Component.js";
import { store } from "../state/store.js";
import { getDateStr } from "../utils/getDateTimeStr.js";
import router from "../utils/router.js";
import ListItem from "./ListItem.js";

class RecordList extends Component {
  mount() {
    const data = store.getState().recordData;
    const list = document.querySelector(".list");
    const selectedDate =
      router.getPathParams().date ?? getDateStr(new Date(), "-");
    const filteredData = data.filter((item) => item.date === selectedDate);
    filteredData.forEach((item, idx) => {
      const li = document.createElement("li");
      list.appendChild(li);
      const itemComponent = new ListItem(li, { idx, ...item });
      itemComponent.render();
    });
  }
}

export default RecordList;
