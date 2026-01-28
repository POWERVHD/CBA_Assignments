import numpy as np
arr = np.arange(1, 11)
print(arr)
print("\n")

zeros = np.zeros(5)
print(zeros)
print("\n")

ones = np.ones((3, 3))
print(ones)
print("\n")

lst = [2, 4, 6, 8, 10]
arr = np.array(lst)
print(arr)
print("\n")

arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.shape)
print(arr.size)
print(arr.dtype)
print("\n")

arr = np.array([[1, 2, 3],
                [4, 5, 6]])
print(arr[1][2])
print("\n")

arr = np.array([[1, 2, 3],
                [4, 5, 6]])
print(arr[1][2])
print("\n")

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a + b)
print("\n")

arr = np.array([2, 4, 6, 8])
print(arr * 5)
print("\n")

arr = np.array([10, 20, 30, 40])
print("Sum:", np.sum(arr))
print("Mean:", np.mean(arr))
print("\n")

arr = np.arange(1, 13)
print(arr.reshape(3, 4))
