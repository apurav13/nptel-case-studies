type OrderEvent = {
    drinkName: string;
};
interface Observer {
    update(event: OrderEvent): void;
}
class Customer implements Observer {
    update(event: OrderEvent): void {
        console.log(`Customer: Your ${event.drinkName} is ready for pickup!`);
    }
}
class Inventory implements Observer {
    update(event: OrderEvent): void {
        console.log(`Inventory: Deduct ingredients used for ${event.drinkName}`);
    }
}
class PromotionSystem implements Observer {
    update(event: OrderEvent): void {
        console.log(`Promotion: Offer coupon with every ${event.drinkName} purchase!`);
    }
}
class DrinkOrder {
    private observers: Observer[] = [];
    addObserver(obs: Observer): void {
        this.observers.push(obs);
    }
    notifyAll(event: OrderEvent): void {
        for (let obs of this.observers) {
            obs.update(event);
        }
    }
    completeOrder(drinkName: string): void {
        console.log(`Preparing ${drinkName}`);
        this.notifyAll({ drinkName });
    }
}

let order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder("Ice Latte");
order.completeOrder("Americano Espresso");