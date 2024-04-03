import Component from "../core/Component.js";
import { store } from "../state/store.js";
import router from "../utils/router.js";

class DateSelector extends Component {
  mount() {
    const selector = document.querySelector(".select-list");
    const data = store.getState().recordData;
    const dateList = this.getDateList(data);
    dateList.forEach((date) => {
      const option = document.createElement("option");
      option.value = date;
      option.innerText = date;
      selector.appendChild(option);
    });
  }

  getDateList(data) {
    const dateSet = new Set();
    data.forEach((item) => {
      dateSet.add(item.date);
    });
    return Array.from(dateSet);
  }

  setEvent() {
    const selector = document.querySelector(".select-list");
    const button = document.querySelector(".select-button");
    button.addEventListener("click", () => {
      const selectedDate = selector.options[selector.selectedIndex].value;
      if (selectedDate === "date") return;
      router.navigate(`/record/${selectedDate}`);
    });
  }
}

export default DateSelector;
