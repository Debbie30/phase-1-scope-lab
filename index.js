// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
        customerName = customerName.toUpperCase();
    } else {
        console.error('customerName is not a string.');
    }
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'bob'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not bob'
}