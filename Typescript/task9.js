var customer = {
    id: "A101",
    name: "Rahul"
};
var processOrder = function (orderId, callback) {
    console.log("Processing order:", orderId);
    callback("pending");
};
processOrder(5001, function (status) {
    console.log("Order status:", status);
});
var customerContainer = {
    value: customer,
    timestamp: new Date()
};
console.log(customerContainer);
