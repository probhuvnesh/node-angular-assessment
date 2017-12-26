(function () {
    'use strict';

    var express = require('express'),
        fs = require('fs'),

        paymentRepository = require('./repositories/paymentRepository'),

        app = express(),
        router = express.Router();


    router.get('/payments', (req, res) => {
        paymentRepository.load('', '').then((data) => {
            res.status(200).json(data);
        }, (error) => {
            res.status(500).json({ message: error.message });
        });
    });

    router.get('/payments/:id', (req, res) => {
        paymentRepository.fetchItem(req.params.id).then((data) => {
            if (data[0]) {
                res.status(200).json(data[0]);
            } else {
                res.status(404).json({ message: 'Record not found!' });
            }
        }, (error) => {
            res.status(500).json({ message: error.message });
        });
    });

    router.post('/payments', (req, res) => {
        paymentRepository.insert(req.body).then((data) => {
            res.status(200).json({
                message: 'The record was added successfully',
                id: data.idGenerated
            });
        }, (error) => {
            res.status(500).json({ message: error.message });
        });
    });

    router.put('/payments', (req, res) => {
        console.log(req.body);
    });

    router.delete('/payments/:id', (req, res) => {

    });

    module.exports = router;
})();
