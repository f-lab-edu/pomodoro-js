import { TIMER_STATUS } from "../const/const.js";
import Component from "../core/Component.js";
import { addRecord, store } from "../state/store.js";
import commonTimer from "../utils/commonTimer.js";
import countingTimer from "../utils/countingTimer.js";

class TimerStarter extends Component {
  mount() {
    const titles = document.getElementsByClassName("timer-starter-title");
    titles[this.props.idx].innerText = this.props.name;
    const minuteInputs = document.getElementsByClassName(
      "timer-starter-minute-input"
    );
    minuteInputs[this.props.idx].defaultValue = this.props.defaultTime;
  }
  setEvent() {
    // 시작버튼
    const startButtons = document.getElementsByClassName(
      "timer-starter-button"
    );
    // 시작버튼을 눌렀을 때
    startButtons[this.props.idx].addEventListener("click", () => {
      // temp
      store.dispatch(
        addRecord({
          date: "20240325",
          startTime: "22:00:00",
          endTime: "23:25:00",
          durationTime: "25:00",
        })
      );
      // input의 분, 초 가져오기
      let minute = parseInt(
        document.getElementsByClassName("timer-starter-input")[
          this.props.idx * 2
        ].value
      );
      let second = parseInt(
        document.getElementsByClassName("timer-starter-input")[
          this.props.idx * 2 + 1
        ].value
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
      // 이전에 등록된 타이머가 있으면 날리기
      if (commonTimer.commonTimer != null) {
        clearInterval(commonTimer.commonTimer);
        commonTimer.commonTimer = null;
      }
      // 타이머 수행
      this.props.setStatus(TIMER_STATUS.START);
      countingTimerWrapper();
      let intervalTimer = setInterval(countingTimerWrapper, 1000);
      commonTimer.commonTimer = intervalTimer;
    });
  }
}

export default TimerStarter;
