# BASIC LEVEL

# 1. Create a dictionary that stores the names of 5 students as keys and their marks as values.

students = {
    "Amit": 85,
    "Neha": 90,
    "Ravi": 78,
    "Anita": 88,
    "Kiran": 92
}
print(students)
print("\n")


# 2. Given a dictionary student = {"name": "Alice", "age": 20, "grade": "A"}, print the value of grade.

student = {"name": "Alice", "age": 20, "grade": "A"}
print(student["grade"])
print("\n")

# 3. Add a new key "city" with value "New York" to an existing dictionary.

student["city"] = "New York"
print(student)
print("\n")

# 4. Given prices = {"apple": 50, "banana": 20}, update the price of "apple" to 60.

prices = {"apple": 50, "banana": 20}
prices["apple"] = 60
print(prices)
print("\n")

# INTERMEDIATE LEVEL

# 5. Print all keys and values in a dictionary using a loop.

for key, value in student.items():
    print(key, ":", value)
print("\n")

# 6. Check whether the key "email" exists in a dictionary.

if "email" in student:
    print("Email exists")
else:
    print("Email does not exist")
print("\n")

# 7. Given a list of words, create a dictionary that stores the frequency of each word.

words = ["apple", "banana", "apple", "orange", "banana", "apple"]
frequency = {}

for word in words:
    frequency[word] = frequency.get(word, 0) + 1

print(frequency)
print("\n")

# 8. Given a dictionary, remove a specific key from it.

student.pop("age")
print(student)
print("\n")

# ADVANCED LEVEL

# 9. Merge two dictionaries into one.

dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}

merged_dict = {**dict1, **dict2}
print(merged_dict)
print("\n")

# 10. Given a dictionary of students and their marks, find the student with the highest marks.

def marks():

    students_marks = {
        "Amit": 85,
        "Neha": 90,
        "Ravi": 78,
        "Anita": 88
    }

    topper = max(students_marks, key=students_marks.get)
    print("Topper:", topper, "Marks:", students_marks[topper])


marks()
