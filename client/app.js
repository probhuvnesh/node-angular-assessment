var app = angular.module('nodeApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('payments-o-matic', {
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'views/paymentsOMatic.html',
                    controller: 'PaymentsOMaticCtrl as vm'
                }
            }
        });
}]);

app.run(['$state', function ($state) {

}]);
