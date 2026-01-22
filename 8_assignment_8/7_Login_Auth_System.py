class User:
    def __init__(self):
        self.__password = ""

    def set_password(self, password):
        self.__password = password

    def validate_login(self, password):
        return self.__password == password


user = User()
user.set_password("admin123")

print(user.validate_login("admin123"))
print(user.validate_login("wrong"))     
