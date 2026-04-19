class Payment {
    constructor(amount) {
        if (this.constructor === Payment) {
            throw new Error("Cannot instantiate abstract class 'Payment'");
        }
        this.amount = amount;
    }

    // Abstract method
    pay() {
        throw new Error("Method 'pay()' must be implemented");
    }

    // Common method
    generateReceipt() {
        console.log(`Payment of ₹${this.amount} successful ✅`);
    }
}

// UPI Payment
class UPI extends Payment {
    constructor(amount, upiId) {
        super(amount);
        this.upiId = upiId;
    }

    pay() {
        console.log(`Processing UPI payment via ${this.upiId}...`);
    }
}

// Card Payment
class Card extends Payment {
    constructor(amount, cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    pay() {
        console.log(`Processing Card payment with card ending ${this.cardNumber.slice(-4)}...`);
    }
}

// NetBanking Payment
class NetBanking extends Payment {
    constructor(amount, bankName) {
        super(amount);
        this.bankName = bankName;
    }

    pay() {
        console.log(`Processing NetBanking via ${this.bankName}...`);
    }
}

// Usage
// const p = new Payment(1000); ❌ Not allowed

const upiPayment = new UPI(500, "akshay@upi");
upiPayment.pay();
upiPayment.generateReceipt();

const cardPayment = new Card(2000, "1234567812345678");
cardPayment.pay();
cardPayment.generateReceipt();

const netBankingPayment = new NetBanking(1500, "HDFC Bank");
netBankingPayment.pay();
netBankingPayment.generateReceipt();