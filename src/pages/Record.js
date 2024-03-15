const Record = (params) => {
  const app = document.getElementById("app");
  const div = document.createElement("div");
  const home = document.createElement("a");
  home.innerHTML = `<a href="/">home</a>`;
  const date = document.createElement("p");
  const today = new Date();
  date.innerText = params
    ? params.date
    : `${String(today.getMonth() + 1).padStart(2, "0")}${today.getDate()}`;
  div.appendChild(home);
  div.appendChild(date);
  app.replaceWith(div);
};

export default Record;
