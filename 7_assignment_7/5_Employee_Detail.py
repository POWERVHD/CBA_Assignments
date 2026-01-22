class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def display_info(self):
        print("Name:", self.name)
        print("Salary:", self.salary)


class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department

    def display_info(self):
        print("Name:", self.name)
        print("Salary:", self.salary)
        print("Department:", self.department)


mgr = Manager("Ravi", 75000, "IT")
mgr.display_info()
