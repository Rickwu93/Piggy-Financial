const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const sassMiddleware = require('./lib/sass-middleware');
// const users = require("./routes/users");
// const db = require("./db");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

// App.use("/api", users(db));


// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));



App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
