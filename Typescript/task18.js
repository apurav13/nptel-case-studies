class StripeGateway {
    async processPayment(amount) {
        console.log(`Processing payment of $${amount} via Stripe`);
        return true;
    }
}
class PaypalGateway {
    async processPayment(amount) {
        console.log(`Processing payment of $${amount} via PayPal`);
        return true;
    }
}
class BankTransferGateway {
    async processPayment(amount) {
        console.log(`Processing payment of $${amount} via Bank Transfer`);
        return true;
    }
}
class PaymentProcessor {
    constructor(gateway) {
        this.gateway = gateway;
    }
    async pay(amount) {
        const success = await this.gateway.processPayment(amount);
        if (success) {
            console.log("Payment Successful!");
        }
        else {
            console.log("Payment Failed");
        }
    }
}
class MockSuccessGateway {
    async processPayment(amount) {
        console.log(`Processing Successful payment of ${amount}`);
        return true;
    }
}
class MockFailureGateway {
    async processPayment(amount) {
        console.log(`Simulating failed payment for ${amount}`);
        return false;
    }
}
const stripe = new PaymentProcessor(new StripeGateway());
stripe.pay(500);
const paypal = new PaymentProcessor(new PaypalGateway());
paypal.pay(800);
const bank = new PaymentProcessor(new BankTransferGateway());
bank.pay(1200);
const successTest = new PaymentProcessor(new MockSuccessGateway());
successTest.pay(50);
const failureTest = new PaymentProcessor(new MockFailureGateway());
failureTest.pay(50);
