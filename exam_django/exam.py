# Data Types

# Which of the following is not a mutable data type in Python?
# a) List
# b) Dictionary
# c) Tuple
# d) Set

c) Tuple

# Lists and Loops

# Using a list comprehension, generate a list of the squares of numbers from 1 to 10, but only include squares of even numbers.

squares_of_even_numbers = [x ** 2 for x in range(1, 11) if x % 2 == 0]
print(squares_of_even_numbers)

# Using the range function, create a list of numbers from 1 to 10, then print numbers that are divisible by both 2 and 3.
divisible_by_2_and_3 = []

for num in range(1, 11):
    if num % 2 == 0 and num % 3 == 0:
        divisible_by_2_and_3.append(num)

print(divisible_by_2_and_3)


# Loop through the provided list of dictionaries and print the names and ages:

# student_list = [
#     {
#     "name": "John", 
#     "age": 24
#     }, 
#     {
#     "name": "Anna", 
#     "age": 22
#     }, 
#     {
#     "name": "Mike", 
#     "age": 25
#     }
# ]

student_list = [
    {"name": "John", "age": 24},
    {"name": "Anna", "age": 22},
    {"name": "Mike", "age": 25}
]

for student in student_list:
    name = student["name"]
    age = student["age"]
    print(f"Name: {name}, Age: {age}")


# Function Behavior with *args and **kwargs

# Write a function combine_words that accepts any number of positional arguments and key-value arguments. The function should return a single sentence combining all the words provided.
# Example:
# print(combine_words("Hello", "world", second="is", third="great!", first="Python"))
# Expected Output:

# "Hello world. Python is great!"

def combine_words(*args, **kwargs):
    word_list = list(args) + list(kwargs.values())
    sentence = " ".join(word_list)
    return sentence + "."

print(combine_words("Hello", "world", second="is", third="great!", first="Python"))


# Object-Oriented Programming (OOP)

# Create a class Vehicle with string attributes type, brand, and integer attribute year. Ensure instances of the vehicle cannot be created if any of these attributes are missing and include a method to display the vehicle’s info. Use dunder method.

class Vehicle:
    def __init__(self, type_, brand, year):
        self.type = type_
        self.brand = brand
        self.year = year
    
    def __str__(self):
        return f"Type: {self.type}, Brand: {self.brand}, Year: {self.year}"

try:
    vehicle1 = Vehicle("Car", "Toyota", 2020)
    print(vehicle1)
except TypeError as e:
    print("Error:", e)

try:
    vehicle2 = Vehicle("Motorcycle", year=2018)
    print(vehicle2)
except TypeError as e:
    print("Error:", e)

# OOP Inheritance and Decorators

# Create a class Car with string attributes brand, model, and integer attribute mileage. Implement a method to return the car’s details.

class Car:
    def __init__(self, brand, model, mileage):
        self.brand = brand
        self.model = model
        self.mileage = mileage
    
    def get_details(self):
        return f"Brand: {self.brand}, Model: {self.model}, Mileage: {self.mileage} miles"

car1 = Car("Toyota", "Camry", 25000)
print(car1.get_details())


# Create a subclass ElectricCar inheriting from Car with an additional float private attribute __battery_capacity. Override the car’s details method to include the battery capacity.
# Use the @property decorator to get the battery_capacity value and @battery_capacity.setter to modify the battery capacity only if the new value is positive.

class Car:
    def __init__(self, brand, model, mileage):
        self.brand = brand
        self.model = model
        self.mileage = mileage
    
    def get_details(self):
        return f"Brand: {self.brand}, Model: {self.model}, Mileage: {self.mileage} miles"

class ElectricCar(Car):
    def __init__(self, brand, model, mileage, battery_capacity):
        super().__init__(brand, model, mileage)
        self.__battery_capacity = battery_capacity
    
    @property
    def battery_capacity(self):
        return self.__battery_capacity
    
    @battery_capacity.setter
    def battery_capacity(self, value):
        if value > 0:
            self.__battery_capacity = value
        else:
            print("Battery capacity must be a positive value.")

    def get_details(self):
        car_details = super().get_details()
        return f"{car_details}, Battery Capacity: {self.battery_capacity} kWh"

electric_car1 = ElectricCar("Tesla", "Model 3", 15000, 75.5)
print(electric_car1.get_details())

electric_car1.battery_capacity = 80.0
print(electric_car1.get_details())

electric_car1.battery_capacity = -10.0
print(electric_car1.get_details())

# Create a BankAccount class with private float attribute _balance and private string attribute _account_holder. Implement methods to deposit, withdraw, and view the balance. Include a class method to track accounts created and a static method for a bank policy message. Ensure the balance is non-negative.

class BankAccount:
    _total_accounts = 0  
    
    def __init__(self, account_holder, initial_balance=0.0):
        self._account_holder = account_holder
        self._balance = max(initial_balance, 0)  
        BankAccount._total_accounts += 1
    
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return True
        else:
            print("Invalid deposit amount.")
            return False
    
    def withdraw(self, amount):
        if amount > 0 and amount <= self._balance:
            self._balance -= amount
            return True
        else:
            print("Insufficient funds or invalid withdrawal amount.")
            return False
    
    def view_balance(self):
        return f"Account Holder: {self._account_holder}, Balance: {self._balance}"
    
    @classmethod
    def get_total_accounts(cls):
        return cls._total_accounts
    
    @staticmethod
    def bank_policy_message():
        return "Thank you for choosing our bank. Your money is safe with us."

account1 = BankAccount("Alice", 1000.0)
account2 = BankAccount("Bob")

account1.deposit(500)
account1.withdraw(200)
account2.deposit(800)

print(account1.view_balance())
print(account2.view_balance())

print("Total accounts:", BankAccount.get_total_accounts())

print(BankAccount.bank_policy_message())


# Data Science

# Numpy and Pandas Visualization

# Create a numpy array of shape (3,3) filled with integers from 1 to 9 using arange().

array_3x3 = np.arange(1, 10).reshape(3, 3)
print(array_3x3)

# Provided pandas DataFrame df:

# import pandas as pd
# df = pd.DataFrame({'A': [1, 'apple', 3, 4, 'banana'], 'B': [5, 6, 7, 8, 9]})


# Replace non-numeric values in column “A” with the mean of numeric values. Plot a histogram of the “A” column using matplotlib.
import pandas as pd
import matplotlib.pyplot as plt


df = pd.DataFrame({'A': [1, 'apple', 3, 4, 'banana'], 'B': [5, 6, 7, 8, 9]})

df['A'] = pd.to_numeric(df['A'], errors='coerce')

mean_a = df['A'].mean()

df['A'].fillna(mean_a, inplace=True)

plt.hist(df['A'], bins=10, edgecolor='black')
plt.xlabel('A')
plt.ylabel('Frequency')
plt.title('Histogram of Column A')
plt.show()


# Plot “A” and “B” columns of df using matplotlib. Add x-axis, y-axis labels, and a title.

df = pd.DataFrame({'A': [1, 'apple', 3, 4, 'banana'], 'B': [5, 6, 7, 8, 9]})

df['A'] = pd.to_numeric(df['A'], errors='coerce')

mean_a = df['A'].mean()

df['A'].fillna(mean_a, inplace=True)

plt.plot(df['A'], label='A')
plt.plot(df['B'], label='B')
plt.xlabel('Index')
plt.ylabel('Value')
plt.title('Columns A and B')
plt.legend()
plt.show()


# Django and Django REST

# Create a new Django project called ‘academy’. After that - create a new app (inside the ‘academy’ project) called ‘school’.



# Django Models with Foreign Key

# Define Django models Teacher and Course. Course has course_name (CharField) and course_code (CharField). Teacher has name (CharField). Create a many-to-many relationship between Teacher and Course.


# Views

# Create a Django view course_details to fetch details of a course by its id.


# Use a APIview for Teacher to display all teachers.



# Full App

# Create a base model SchoolFacility with facility_name (CharField) and usage_purpose (TextField).


# Create a Laboratory model inheriting from SchoolFacility with equipment_list (TextField).


# Create views for all school facilities and another for only laboratories.


# Create a serializer for SchoolFacility and another for Laboratory to convert to JSON. Test using Postman.