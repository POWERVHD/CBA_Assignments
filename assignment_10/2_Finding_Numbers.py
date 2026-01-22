numbers = [10, 20, 30, 40, 50]

user_input = int(input("Number to search: "))

if user_input in numbers:
    print(f"{user_input} is present in the list.")
else:
    print(f"{user_input} is not present in the list.")
