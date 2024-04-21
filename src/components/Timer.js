import Component from "../core/Component.js";
import { padDateTime } from "../utils/getDateTimeStr.js";

class Timer extends Component {
  constructor(parent, props) {
    super(parent, props);
    this.name = "timer";
  }
  mount() {
    const minuteNode = document.getElementsByClassName("timer-minute");
    const secondeNode = document.getElementsByClassName("timer-second");
    minuteNode[0].innerText = padDateTime(this.props.minute.toString());
    secondeNode[0].innerText = padDateTime(this.props.second.toString());
  }
}

export default Timer;
