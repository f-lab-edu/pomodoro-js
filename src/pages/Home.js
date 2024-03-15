import router from "../utils/router.js";

const Home = () => {
  const app = document.getElementById("app");
  const home = document.createElement("a");
  home.innerHTML = `<a href="/record">record</a>`;
  home.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate("/record/123");
  });
  app.appendChild(home);
};

export default Home;
