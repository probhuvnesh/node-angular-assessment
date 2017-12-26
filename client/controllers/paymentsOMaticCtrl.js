app.controller('PaymentsOMaticCtrl', ['$http', function ($http) {
    'use strict';

    var _errorHandler = function (err) {
        console.error(err);
    };

    var vm = this;

    vm.payments = [];
    vm.payment = null;
    vm.addNewPaymentForm = false;

    vm.init = function () {
        vm.loadPayments();
    };

    vm.loadPayments = function () {
        $http({
            method: 'GET',
            url: '/api/payments'
        }).then(function (response) {
            console.log(response);
            vm.payments = response.data;
        }, _errorHandler);
    };

    vm.showDetails = function (payment) {
        vm.payment = payment;
        vm.activeTabPayment = payment;
    };

    vm.updatePayment = function () {
        console.log(vm.payment);

        $http({
            method: 'PUT',
            url: '/api/payments',
            data: vm.payment
        }).then(function (response) {
            console.log(response);
        }, _errorHandler);
    };

    vm.addPayment = function () {
        console.log(vm.payment);

        $http({
            method: 'POST',
            url: '/api/payments',
            data: vm.payment
        }).then(function (response) {
            console.log(response);
        }, _errorHandler);
    };

    vm.cancel = function () {
        vm.payment = null;   
        vm.addNewPaymentForm = false;     
    };
    vm.addPaymentForm = function() {
        vm.addNewPaymentForm = true;
    }

    vm.init();
}]);
