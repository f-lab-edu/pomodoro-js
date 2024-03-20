import TimerControl from "../components/TimerControl.js";
import Component from "../core/Component.js";

class Home extends Component {
  mount() {
    const parent = document.querySelectorAll(
      '[data-component="timer_control"]'
    );
    parent.forEach((node) => {
      new TimerControl(node);
    });
  }
}

export default Home;
