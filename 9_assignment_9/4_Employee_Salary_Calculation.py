class Employee:
    def calculate_salary(self):
        pass


class FullTimeEmployee(Employee):
    def calculate_salary(self):
        return 50000


class PartTimeEmployee(Employee):
    def calculate_salary(self):
        return 20000


class Intern(Employee):
    def calculate_salary(self):
        return 10000


employees = [FullTimeEmployee(), PartTimeEmployee(), Intern()]

for emp in employees:
    print("Salary:", emp.calculate_salary())
