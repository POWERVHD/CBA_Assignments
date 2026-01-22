numbers = [10, 20, 30, 40, 50]
search = int(input("Enter number to search: "))

if search in numbers:
    print("Element found at index:", numbers.index(search))
else:
    print("Element not found")
