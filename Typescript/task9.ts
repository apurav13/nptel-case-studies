type CustomerID = string;
type Customer = {
    id: CustomerID;
    name: string;
    email?: string;
};
type OrderStatus = "pending" | "shipped" | "returned";
type ProcessOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;
type Container<T> = {
    value: T;
    timestamp: Date;
};
let customer: Customer = {
    id: "A101",
    name: "Rahul"
};
const processOrder: ProcessOrder = (orderId, callback) => {
    console.log("Processing order:", orderId);
    callback("pending");
};
processOrder(5001, (status) => {
    console.log("Order status:", status);
});
let customerContainer: Container<Customer> = {
    value: customer,
    timestamp: new Date()
};
console.log(customerContainer);