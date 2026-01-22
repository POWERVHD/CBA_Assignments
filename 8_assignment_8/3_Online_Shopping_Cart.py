class Product:
    def __init__(self, product_id, name, price):
        self.product_id = product_id
        self.name = name
        self.price = price

    def apply_discount(self, percent):
        self.price -= self.price * percent / 100


class Cart:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def total_price(self):
        return sum(p.price for p in self.products)


p1 = Product(1, "Computer", 50000)
p2 = Product(2, "Mouse", 500)

p1.apply_discount(10)

cart = Cart()
cart.add_product(p1)
cart.add_product(p2)

print("Total Price:", cart.total_price())
