import math

class Shape:
    def area(self):
        pass   


class Rectangle(Shape):
    def __init__(self, length, breadth):
        self.length = length
        self.breadth = breadth

    def area(self):
        return self.length * self.breadth


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius * self.radius


rect = Rectangle(5, 4)
circle = Circle(3)

print("Rectangle Area:", rect.area())
print("Circle Area:", circle.area())
