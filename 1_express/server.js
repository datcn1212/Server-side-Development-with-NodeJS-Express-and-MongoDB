const express = require('express');
const path = require('path');
// const logger = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const dishRouter = require('./dishRouter');
const leaderRouter = require('./leaderRouter');
const promoRouter = require('./promoRouter');

const app = express();

app.set('view engine', 'hbs');

// app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/dishes', dishRouter);
app.use('/leadership', leaderRouter);
app.use('/promotions', promoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port);
});