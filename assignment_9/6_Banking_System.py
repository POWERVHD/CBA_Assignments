from abc import ABC, abstractmethod

class BankAccount(ABC):
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    @abstractmethod
    def calculate_interest(self):
        pass


class SavAccount(BankAccount):
    def calculate_interest(self):
        return self.balance * 0.04 


class CurrAccount(BankAccount):
    def calculate_interest(self):
        return self.balance * 0.02   


accounts = [SavAccount(10000), CurrAccount(10000)]

for acc in accounts:
    print("Interest:", acc.calculate_interest())
