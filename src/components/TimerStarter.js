import { TIMER_STATUS } from "../const/const.js";
import Component from "../core/Component.js";
import commonTimer from "../utils/commonTimer.js";
import countingTimer from "../utils/countingTimer.js";
import { getTimeStr, padDateTime } from "../utils/getDateTimeStr.js";

class TimerStarter extends Component {
  constructor(parent, props) {
    super(parent, props);
    this.name = "timerstarter";
  }
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
      commonTimer.startTime = getTimeStr(new Date(), ":");
      commonTimer.durationTime = `${padDateTime(minute)}:${padDateTime(
        second
      )}`;
      countingTimerWrapper();
      let intervalTimer = setInterval(countingTimerWrapper, 1000);
      commonTimer.commonTimer = intervalTimer;
    });
  }
}

export default TimerStarter;
