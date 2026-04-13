var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.update = function (event) {
        console.log("Customer: Your ".concat(event.drinkName, " is ready for pickup!"));
    };
    return Customer;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.update = function (event) {
        console.log("Inventory: Deduct ingredients used for ".concat(event.drinkName));
    };
    return Inventory;
}());
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.update = function (event) {
        console.log("Promotion: Offer coupon with every ".concat(event.drinkName, " purchase!"));
    };
    return PromotionSystem;
}());
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (obs) {
        this.observers.push(obs);
    };
    DrinkOrder.prototype.notifyAll = function (event) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var obs = _a[_i];
            obs.update(event);
        }
    };
    DrinkOrder.prototype.completeOrder = function (drinkName) {
        console.log("Preparing ".concat(drinkName));
        this.notifyAll({ drinkName: drinkName });
    };
    return DrinkOrder;
}());
var order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder("Ice Latte");
order.completeOrder("Americano Espresso");
