export const getDateStr = (date, separator) => {
  return (
    date.getFullYear() +
    separator +
    padDateTime(date.getMonth() + 1) +
    separator +
    date.getDate()
  );
};

export const getTimeStr = (date, separator) => {
  return (
    padDateTime(date.getHours()) +
    separator +
    padDateTime(date.getMinutes()) +
    separator +
    padDateTime(date.getSeconds())
  );
};

export const padDateTime = (num) => {
  return num.toString().padStart(2, "0");
};
