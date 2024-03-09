const Record = () => {
  const app = document.getElementById("app");
  const home = document.createElement("a");
  home.innerHTML = `<a href="/">home</a>`;
  app.replaceWith(home);
};

export default Record;
