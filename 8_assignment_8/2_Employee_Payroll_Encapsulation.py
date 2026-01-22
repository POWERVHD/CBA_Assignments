class Employee:
    def __init__(self):
        self.__salary = 0   

    def set_salary(self, salary):
        self.__salary = salary

    def get_salary(self):
        return self.__salary

    def annual_salary(self):
        return self.__salary * 12


emp = Employee()
emp.set_salary(30000)
print("Monthly Salary:", emp.get_salary())
print("Annual Salary:", emp.annual_salary())
