import createStore from "../core/createStore.js";

const initState = {
  recordData: [
    {
      date: "20240324",
      startTime: "16:00:00",
      endTime: "16:25:00",
      durationTime: "25:00",
    },
  ],
};

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case "ADD_RECORD":
      return { ...state, recordData: [...state.recordData, action.payload] };
  }
  return state;
});

export const addRecord = (payload) => ({ type: "ADD_RECORD", payload });
