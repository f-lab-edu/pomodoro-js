import Component from "../core/Component.js";

class Timer extends Component {
  mount() {
    const minuteNode = document.getElementsByClassName("timer-minute");
    const secondeNode = document.getElementsByClassName("timer-second");
    minuteNode[0].innerText = this.props.minute.toString().padStart(2, "0");
    secondeNode[0].innerText = this.props.second.toString().padStart(2, "0");
  }
}

export default Timer;
