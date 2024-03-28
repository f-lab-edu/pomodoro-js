import { TIMER_STATUS } from "../const/const.js";
import commonTimer from "../utils/commonTimer.js";

const countingTimer = (minute, second, setStatus, setTimer) => {
  if (minute === 0 && second === 0) {
    clearInterval(commonTimer.commonTimer);
    commonTimer.commonTimer = null;
    setStatus(TIMER_STATUS.FINISH);
  }
  setTimer(minute, second--);
  if (second < 0) {
    second = 59;
    minute--;
  }
  return [minute, second];
};

export default countingTimer;
