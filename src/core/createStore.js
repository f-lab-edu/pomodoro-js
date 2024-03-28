import _ from "lodash";

const freeze = (state) => _.cloneDeep(state);

const createStore = (reducer) => {
  let listeners = [];
  let state = reducer();

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const invokeSubscribers = () => {
    const data = freeze(state);
    listeners.forEach((l) => l(data));
  };

  const dispatch = (action) => {
    const newState = reducer(state, action);

    if (!newState || newState === state) {
      return;
    }

    state = newState;

    invokeSubscribers();
  };

  return {
    subscribe,
    dispatch,
    getState: () => freeze(state),
  };
};

export default createStore;
