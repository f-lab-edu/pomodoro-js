export const includeHTML = () => {
  const allElements = document.getElementsByTagName("*");

  const promises = Array.from(allElements).map(async (target) => {
    let includePath = target.dataset.includePath;

    if (includePath) {
      const response = await fetch(includePath);
      const html = await response.text();
      target.outerHTML = html;
    } else {
      return Promise.resolve();
    }
  });

  return Promise.all(promises);
};
