const path = require('path');
const express = require('express');
// const session = require('express-session');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("public"));

app.use(routes);

app.listen(PORT, () => console.log(`Now Available on http://localhost:${PORT}`));
