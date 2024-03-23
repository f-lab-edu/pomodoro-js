import TimerControl from "../components/TimerControl.js";
import Timer from "../components/Timer.js";
import Component from "../core/Component.js";

class Home extends Component {
  constructor(parent, props) {
    super(parent, props);
    this.state = {
      minute: 25,
      second: 0,
      status: "FINISH",
    };
  }
  mount() {
    // 타이머 컴포넌트
    const timer = document.querySelector('[data-component="timer"]');
    const timerComponent = new Timer(timer, {
      minute: this.state.minute,
      second: this.state.second,
    });
    timerComponent.render();

    const setTimer = (minute, second) => {
      this.setState({
        ...this.state,
        minute,
        second,
      });
    };

    const setStatus = (newStatus) => {
      this.setState({
        ...this.state,
        status: newStatus,
      });
    };

    // 타이머 컨트롤 컴포넌트
    const control = document.querySelector('[data-component="timer-control"]');
    const timerControlComponent = new TimerControl(control, {
      setTimer,
      setStatus,
      status: this.state.status,
    });
    timerControlComponent.render();
  }
}

export default Home;
