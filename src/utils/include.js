export const includeHTML = () => {
  let allElements = document.getElementsByTagName("*");
  Array.from(allElements).forEach((target) => {
    let includePath = target.dataset.includePath;
    if (includePath) {
      fetch(includePath)
        .then((response) => {
          return response.text();
        })
        .then((html) => {
          target.outerHTML = html;
        });
    }
  });
};

includeHTML();
