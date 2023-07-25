#Exercise1
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f"{self.amount} {self.currency}"

#     def __int__(self):
#         return self.amount

#     def __repr__(self):
#         return f"{self.amount} {self.currency}"

#     def __add__(self, other):
#         if isinstance(other, int):
#             return Currency(self.currency, self.amount + other)
#         elif isinstance(other, Currency) and self.currency == other.currency:
#             return Currency(self.currency, self.amount + other.amount)
#         else:
#             raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")

#     def __iadd__(self, other):
#         return self + other

# # Example usage
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1)) 
# print(int(c1))  
# print(repr(c1))  

# print(c1 + 5)  
# print(c1 + c2)  

# print(c1)  

# c1 += 5
# print(c1) 

# c1 += c2
# print(c1)  

# print(c1 + c3)  

#Exercise2
# from func.py import add_numbers

# if __name__ == "__main__":
#     add_numbers(5, 7)

#Exercise3
# import random

# def roll_and_check(user_number):
#     if not isinstance(user_number, int) or user_number < 1 or user_number > 100:
#         print("Please enter a valid number between 1 and 100.")
#         return

#     random_number = random.randint(1, 100)
#     print(f"Your number: {user_number}")
#     print(f"Random number: {random_number}")

#     if user_number == random_number:
#         print("Congratulations! You guessed the same number!")
#     else:
#         print("Try again! The numbers didn't match.")

# user_input = int(input("Enter a number between 1 and 100: "))
# roll_and_check(user_input)

#Exercise4
# import string
# import random

# def generate_random_string(length=5):
#     letters = string.ascii_letters
#     random_string = ''.join(random.choice(letters) for _ in range(length))
#     return random_string


# random_string = generate_random_string()
# print(random_string)

#Exercise5
# import datetime

# def display_current_date():
#     current_date = datetime.date.today()
#     print(f"Current Date: {current_date}")

# display_current_date()

#Exercise6
# import datetime

# def time_left_until_january_1st():
#     current_date = datetime.datetime.now()
#     january_1st = datetime.datetime(current_date.year + 1, 1, 1)

#     time_left = january_1st - current_date
#     days_left = time_left.days
#     hours_left = time_left.seconds // 3600
#     minutes_left = (time_left.seconds % 3600) // 60
#     seconds_left = time_left.seconds % 60

#     print(f"The 1st of January is in {days_left} days and {hours_left:02}:{minutes_left:02}:{seconds_left:02} hours.")

# time_left_until_january_1st()

#Exercise7
# from datetime import datetime

# def calculate_age_in_minutes(birthdate, date_format="%Y-%m-%d %H:%M:%S"):
#     try:
#         birth_date = datetime.strptime(birthdate, date_format)
#         current_date = datetime.now()
#         age_in_minutes = (current_date - birth_date).total_seconds() / 60
#         return age_in_minutes
#     except ValueError:
#         print("Invalid date format. Please provide the birthdate in the format specified.")
#         return None

# def display_age_in_minutes(birthdate, date_format="%Y-%m-%d %H:%M:%S"):
#     age_in_minutes = calculate_age_in_minutes(birthdate, date_format)
#     if age_in_minutes is not None:
#         print(f"You have lived approximately {age_in_minutes:.2f} minutes.")

# birthdate_input = "1990-01-01 12:30:00"
# display_age_in_minutes(birthdate_input)

#Exercise8
# from faker import Faker


# fake = Faker()


# users = []

# def add_user():
#     user = {
#         'name': fake.name(),
#         'address': fake.address(),
#         'language_code': fake.language_code(),
#     }
#     users.append(user)


# for _ in range(5):
#     add_user()

# print(users)




