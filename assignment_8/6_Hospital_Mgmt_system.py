class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


class Doctor(Person):
    def __init__(self, name, age, specialization):
        super().__init__(name, age)
        self.specialization = specialization


class Patient(Person):
    def __init__(self, name, age, disease):
        super().__init__(name, age)
        self.disease = disease


doc = Doctor("Dr. Nikita", 45, "Cardio")
pat = Patient("Rahul", 30, "Fever")

print(doc.name, doc.age, doc.specialization)
print(pat.name, pat.age, pat.disease)
