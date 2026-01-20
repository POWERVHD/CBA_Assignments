class Payment:
    def pay(self, amount):
        pass


class CreditCardPayment(Payment):
    def pay(self, amount):
        print("Paid", amount, "using Credit Card")


class UPI(Payment):
    def pay(self, amount):
        print("Paid", amount, "using UPI")


class CashPayment(Payment):
    def pay(self, amount):
        print("Paid", amount, "in Cash")


payments = [CreditCardPayment(), UPI(), CashPayment()]

for p in payments:
    p.pay(1000)
