const pagesHandlers = require("./handlers/pages")
const getCurrent = require("./handlers/weather")

const initRoutes = (app) => {
  app.get("/", pagesHandlers.home);
  app.get("/contact", pagesHandlers.contact);

  app.get("/weather", getCurrent);
};


module.exports = initRoutes