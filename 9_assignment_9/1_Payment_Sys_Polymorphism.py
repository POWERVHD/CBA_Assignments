class Payment:
    def pay(self, amt):
        pass


class CreditCardPayment(Payment):
    def pay(self, amt):
        print(f"Paid {amt} using Credit Card")


class UPIPayment(Payment):
    def pay(self, amt):
        print(f"Paid {amt} using UPI")


class CashPayment(Payment):
    def pay(self, amt):
        print(f"Paid {amt} using Cash")

payments = [CreditCardPayment(), UPIPayment(), CashPayment()]

for payment in payments:
    payment.pay(1000)
