const toggleProjects = () => {
  const dashboard = getById("dashboard");
  toggleAttribute(dashboard, offscreen);
  let button = getById("projectBtn");

  if (dashboard.hasAttribute(offscreen)) {
    button.innerText = "Show Projects";
  } else {
    button.innerText = "Hide Projects";
  }
};
const hideHelloScreen = () => {
  const helloScreen = getById("helloscreen");
  toggleAttribute(helloScreen, offscreen);
};

setTimeout(hideHelloScreen, 2000);
