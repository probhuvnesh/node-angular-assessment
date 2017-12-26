(function () {
    'use strict';

    var fs = require('fs');

    var paymentRepository = {
        load: function (criteria, orderBy) {
            return new Promise((resolve, reject) => {
                fs.readFile('./server/db.json', (err, rawdata) => {
                    if (err) {
                        reject(err);
                    } else {
                        var db = JSON.parse(rawdata);
                        resolve(db.payments);
                    }
                });
            });
        },
        fetchItem: function (id) {
            return new Promise((resolve, reject) => {
                fs.readFile('./server/db.json', (err, rawdata) => {
                    if (err) {
                        reject(err);
                    } else {
                        var db = JSON.parse(rawdata);
                        var rs = db.payments.forEach(function (element) {
                            return (element.id == id);
                        });
                        resolve(rs);
                    }
                });
            });
        },
        insert: function (payment) {
            return new Promise((resolve, reject) => {
                fs.readFile('./server/db.json', (rdError, rawdata) => {
                    if (rdError) {
                        reject(rdError);
                    } else {
                        var db = JSON.parse(rawdata);
                        payment.id = db.payments.length + 1;
                        db.payments.push(payment);

                        fs.writeFile('./server/db.json', db, (wrError) => {
                            if (wrError) {
                                reject(wrError)
                            } else {
                                resolve({ idGenerated: payment.id });
                            }
                        });
                    }
                });
            });
        }
    };

    module.exports = paymentRepository;
})();
