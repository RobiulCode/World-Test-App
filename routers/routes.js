const authRouter = require("./authRouter");
const routes = [
  {
    path: "/api/auth",
    handler: authRouter
  },
  {
    path: "/",
    handler: (req, res) => {
      res.send("Alhamdulillah server is running now");
    }
  }
];

const applyRouter = (app) => {
  routes.map((r) => {
    if (r.path === "/") {
      app.get(r.path, r.handler);
    } else {
      app.use(r.path, r.handler);
    }
  });
};
module.exports = applyRouter;
