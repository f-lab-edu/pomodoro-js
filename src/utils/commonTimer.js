const commonTimer = {
  _commonTimer: null,
  _startTime: null,
  _durationTime: null,

  get commonTimer() {
    return this._commonTimer;
  },
  set commonTimer(props) {
    this._commonTimer = props;
  },

  get startTime() {
    return this._startTime;
  },
  set startTime(props) {
    this._startTime = props;
  },

  get durationTime() {
    return this._durationTime;
  },
  set durationTime(props) {
    this._durationTime = props;
  },
};

export default commonTimer;
