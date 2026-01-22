class BankAccount:
    def __init__(self, account_number, account_holder, balance):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient balance")
        else:
            self.balance -= amount

    def display_balance(self):
        print("Balance:", self.balance)

acc1 = BankAccount(101, "Ravi", 5000)
acc2 = BankAccount(102, "Anita", 8000)

acc1.deposit(2000)
acc1.withdraw(3000)
acc1.display_balance()

acc2.withdraw(1000)
acc2.display_balance()


