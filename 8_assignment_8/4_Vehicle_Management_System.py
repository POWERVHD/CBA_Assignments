class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def start(self):
        print("Vehicle started")


class Car(Vehicle):
    def __init__(self, brand, model, doors):
        super().__init__(brand, model)
        self.number_of_doors = doors


class Bike(Vehicle):
    def __init__(self, brand, model, engine_cc):
        super().__init__(brand, model)
        self.engine_cc = engine_cc


car = Car("Audi", "A4", 4)
bike = Bike("Yamaha", "R15", 250)

car.start()
bike.start()
