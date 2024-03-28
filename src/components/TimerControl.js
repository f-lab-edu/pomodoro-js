import Component from "../core/Component.js";
import TimerStarter from "../components/TimerStarter.js";
import TimerStopper from "../components/TimerStopper.js";
import { TIMER_STATUS } from "../const/const.js";

class TimerControl extends Component {
  mount() {
    const starters = document.querySelectorAll(
      '[data-component="timer-starter"]'
    );
    const starterInfo = [
      {
        name: "Work",
        defaultTime: 25,
      },
      { name: "Break", defaultTime: 5 },
    ];
    const stopper = document.querySelector('[data-component="timer-stopper"]');
    const stopperComponent = new TimerStopper(stopper, {
      setTimer: this.props.setTimer,
      setStatus: this.props.setStatus,
      status: this.props.status,
    });

    switch (this.props.status) {
      case TIMER_STATUS.FINISH:
        // 시작 버튼
        starterInfo.forEach((item, idx) => {
          const starterComponent = new TimerStarter(starters[idx], {
            idx,
            ...item,
            setTimer: this.props.setTimer,
            setStatus: this.props.setStatus,
            status: this.props.status,
          });
          starterComponent.render();
        });
        break;
      case TIMER_STATUS.PAUSE:
      case TIMER_STATUS.START:
        // 중지/리셋 버튼
        stopperComponent.render();
        break;
    }
  }
}

export default TimerControl;
