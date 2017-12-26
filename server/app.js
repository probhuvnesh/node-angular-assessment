(function () {
    'use strict';

    var express = require('express'),
        bodyParser = require('body-parser'),
        logger = require('morgan'),
        fs = require('fs'),
        path = require('path'),

        app = express(),
        router = express.Router(),
        port = process.env.PORT || 3000,

        routeConfig = require('./routeConfig');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('node_modules'));
    app.use(express.static('client'));

    router.get('/', (req, res) => {
        res.sendFile('index.html', { root: 'client/' });
    });

    app.use('/', router);
    app.use('/api', routeConfig);

    app.listen(port);
    console.log('Server runnig at port: ' + port);
})();
