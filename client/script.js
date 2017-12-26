function PaymentsController(scope) {
    scope.payments = [{
        id: 1,
        counterparty: "Wood-u-like",
        amount: "2,240.00",
        currency: "GBP",
        valueDate: "22/10/2015",
        creditAccount: "68794832"
    }, {
        id: 2,
        counterparty: "Bag o' nails",
        amount: "1,500.00",
        currency: "GBP",
        valueDate: "22/10/2015",
        creditAccount: "30921782"
    }, {
        id: 3,
        counterparty: "Fatcat Investors",
        amount: "22,000.00",
        currency: "USD",
        valueDate: "31/10/2015",
        creditAccount: "44236712"
    }];
}

angular.module("paymentsApp", [])
    .controller("PaymentsController", ["$scope", PaymentsController]);
