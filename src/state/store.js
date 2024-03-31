import createStore from "../core/createStore.js";

const initState = {
  recordData: [
    {
      date: "2024-03-24",
      startTime: "16:00:00",
      endTime: "16:25:00",
      durationTime: "25:00",
    },
    {
      date: "2024-03-24",
      startTime: "16:00:00",
      endTime: "16:25:00",
      durationTime: "25:00",
    },
    {
      date: "2024-03-27",
      startTime: "16:00:00",
      endTime: "16:25:00",
      durationTime: "25:00",
    },
    {
      date: "2024-03-28",
      startTime: "16:00:00",
      endTime: "16:25:00",
      durationTime: "25:00",
    },
  ],
};

export const store = createStore((state = initState, action = {}) => {
  if (action.type === "ADD_RECORD") {
    return { ...state, recordData: [...state.recordData, action.payload] };
  }
  return state;
});

export const addRecord = (payload) => ({ type: "ADD_RECORD", payload });
