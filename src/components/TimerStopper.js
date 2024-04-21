import { TIMER_STATUS } from "../const/const.js";
import Component from "../core/Component.js";
import commonTimer from "../utils/commonTimer.js";
import countingTimer from "../utils/countingTimer.js";

class TimerStopper extends Component {
  constructor(parent, props) {
    super(parent, props);
    this.name = "timerstopper";
  }
  mount() {
    const pauseButton = document.querySelector(".timer-pause-button");
    if (this.props.status === TIMER_STATUS.PAUSE) {
      pauseButton.classList.remove("pause");
      pauseButton.classList.add("resume");
      pauseButton.innerText = "Resume";
    } else {
      pauseButton.classList.remove("resume");
      pauseButton.classList.add("pause");
      pauseButton.innerText = "Pause";
    }
  }
  setEvent() {
    // Pause 버튼
    const pauseButton = document.querySelector(".timer-pause-button");
    pauseButton.addEventListener("click", () => {
      if (this.props.status === TIMER_STATUS.PAUSE) {
        this.props.setStatus(TIMER_STATUS.START);
        // 타이머 재개
        let minute = parseInt(
          document.querySelector(".timer-minute").innerText
        );

        let second = parseInt(
          document.querySelector(".timer-second").innerText
        );
        // 타이머 작동 함수
        const countingTimerWrapper = () => {
          [minute, second] = countingTimer(
            minute,
            second,
            this.props.setStatus,
            this.props.setTimer
          );
        };
        countingTimerWrapper();
        commonTimer.commonTimer = setInterval(countingTimerWrapper, 1000);
      } else if (this.props.status === TIMER_STATUS.START) {
        this.props.setStatus(TIMER_STATUS.PAUSE);
        clearInterval(commonTimer.commonTimer);
      }
    });
    // Reset 버튼
    const resetButton = document.querySelector(".timer-reset-button");
    resetButton.addEventListener("click", () => {
      clearInterval(commonTimer.commonTimer);
      commonTimer.commonTimer = null;
      this.props.setTimer(0, 0);
      this.props.setStatus(TIMER_STATUS.FINISH);
    });
  }
}

export default TimerStopper;
