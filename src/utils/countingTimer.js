import { TIMER_STATUS } from "../const/const.js";
import commonTimer from "../utils/commonTimer.js";
import { addRecord, store } from "../state/store.js";
import { getDateStr, getTimeStr } from "./getDateTimeStr.js";

const countingTimer = (minute, second, setStatus, setTimer) => {
  if (minute === 0 && second === 0) {
    clearInterval(commonTimer.commonTimer);
    commonTimer.commonTimer = null;
    setStatus(TIMER_STATUS.FINISH);
    store.dispatch(
      addRecord({
        date: getDateStr(new Date(), "-"),
        startTime: commonTimer.startTime,
        endTime: getTimeStr(new Date(), ":"),
        durationTime: commonTimer.durationTime,
      })
    );
  }
  setTimer(minute, second--);
  if (second < 0) {
    second = 59;
    minute--;
  }
  return [minute, second];
};

export default countingTimer;
