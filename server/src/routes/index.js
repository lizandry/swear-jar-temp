require('dotenv').config()
const router = require('express').Router();
const Database = require('../db')
const dbName = process.env.DB_NAME || 'swear-jar';
const db = new Database(dbName);

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/api/users', (_unused, res, next) =>
  db
    .getAllUsers()
    .then((users) => res.send(users))
    .catch(next)
);

  // TODO set up user login  here
// app.get('/api/login', (_unused, res, next) =>
// db.getAllUsers()
// );

// populates user's info from database, as well as info for the teams they're on
// REFACTOR to include the getTeams function/route
router.get('/api/users/:user', (req, res, next) =>
  Promise.all([
    db
      .getUser(req.params.user),
    db
      .getUserTeams(req.params.user)
  ])
  .then(data=>res.send(data))
  .catch(next)
)

// COMPLETE!!
// adds a swear to users_to_teams table
router.post('/api/users/:user/:team', (req, res, next) =>
  db
    .addSwearToUser([req.params.user, req.params.team])
    // .then(swears=>console.log('swears', swears))
    .then(swearCount=>res.send(swearCount))
    .catch(next)
);


// gets all teammates for all of a given user's teams
// would have to sort them, to populate team tables
router.get('/api/teams', (req, res, next) =>
db
.getTeams(req.query.ids)
.then(team=>res.send(team))
.catch(next)
);

// COMPLETE!!
// adds new team to db
router.post('/api/teams/team', (req, res, next) =>
// console.log(req.body)
  db
    .addTeam(req.body)
    .then(team => res.send(team))
    .catch(next)
);
       
// COMPLETE!!
// gets all users on a given team
router.get('/api/teams/:team', (req, res, next) =>
  db
    .getTeam(req.params.team)
    .then(team => res.send(team))
    .catch(next)
);

// router.use("/admins", require("./admins.route"));
// router.use("/users", require("./users.route"));
// router.use("/auth", require("./auth.route"));

module.exports = router;