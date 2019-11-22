var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const hbs = require('hbs');

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d79e3bc5963748c0a667349902211304');



const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('dotenv').config();

var router = require('./routes/index');
var siteRouter = require('./routes/site-routes');

var app = express();



mongoose.connect('mongodb://localhost:27017/world-news-project', {
  useNewUrlParser: true,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


hbs.registerPartials(__dirname + '/views/partials')

// Before the routes
// SESSION ( & COOKIES ) MIDDLEWARE   -- req.session.currentUser
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // cookie: { maxAge: 3600000 } // 1 hour
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24 * 7, // Default - 14 days
    }),
  }),
);



// Routes
app.use('/', router);  // '/' , '/login' '/auth' '/signup'
app.use('/', siteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=d79e3bc5963748c0a667349902211304';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })



module.exports = app;
