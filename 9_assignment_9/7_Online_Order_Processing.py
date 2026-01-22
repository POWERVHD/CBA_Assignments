from abc import ABC, abstractmethod

class Order(ABC):

    @abstractmethod
    def process_order(self):
        pass

    def order_summary(self):
        print("Order has been placed successfully")


class FoodOrder(Order):
    def process_order(self):
        print("Processing food order")


class GroceryOrder(Order):
    def process_order(self):
        print("Processing grocery order")


class MedicineOrder(Order):
    def process_order(self):
        print("Processing medicine order")


orders = [FoodOrder(), GroceryOrder(), MedicineOrder()]

for order in orders:
    order.process_order()
    order.order_summary()
