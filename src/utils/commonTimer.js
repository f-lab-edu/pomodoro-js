const commonTimer = {
  _commonTimer: null,
  get commonTimer() {
    return this._commonTimer;
  },
  set commonTimer(props) {
    this._commonTimer = props;
  },
};

export default commonTimer;
