#Exercise 1
# my_fav_numbers = {1,2,3,4,5}
# my_fav_numbers.add(15)
# my_fav_numbers.add(17)
# my_fav_numbers.discard(5)
# friend_fav_numbers = {4,6,7,8,9,10}
# print(my_fav_numbers.union(friend_fav_numbers))

#Exercise 2
# No

#Exercise 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# apple_count = basket.count("Apples")
# basket.clear()
# print(basket)

#Exercise 4
# 1 Integers and floats are two different kinds of numerical data. An integer (more commonly called an int) is a number without a decimal point. A float is a floating-point number, which means it is a number that has a decimal place. Floats are used when more precision is needed.
# 2 Using the numpy. linspace() method.
# Using the numpy. arange() method.
# Using list comprehension.
# Using generator comprehension.
# Using yield generator.
# Using a user-defined function.
# Using the itertools module and its functions.
# Using the map() function along with a lambda function.
# 3 
# sequence = []
# start = 1.5
# end = 5
# step = 0.5

# current = start
# while current <= end:
#     sequence.append(current)
#     current += step

# print(sequence)


#Exercise 5

# 1 for number in range(1, 21):
#     print(number)



# for number in range(1, 21):
#     if number % 2 == 0:
#         print(number)

#Exercise 6
# name = ""
# my_name = "Mikhael"

# while name != my_name:
#     name = input("Please enter your name: ")

# print("Thank you for entering your name!")

#Exercise 7
# fruits = input("Please enter your favorite fruit, separated by a single space: ")
# fruit_list = fruits.split()

# print("Your favorite fruits are:", fruit_list)

# favorite_fruits = input("Please enter your favorite fruit, separated by a single space: ").split()
# chosen_fruit = input("Please enter a name of any fruit: ")

# if chosen_fruit in favorite_fruits:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy!")

#Exercise 8
# toppings = []

# while True:
#     topping = input("Please enter a pizza topping (enter 'quit' to finish): ")
#     if topping.lower() == 'quit':
#         break
#     toppings.append(topping)

# print("Pizza toppings:", toppings)

# toppings = []

# while True:
#     topping = input("Please enter a pizza topping (enter 'quit' to finish): ")
#     if topping.lower() == 'quit':
#         break
#     print("Adding", topping, "to your pizza!")
#     toppings.append(topping)

# print("Pizza toppings:", toppings)

# toppings = []
# topping_price = 2.5

# while True:
#     topping = input("Please enter a pizza topping (enter 'quit' to finish): ")
#     if topping.lower() == 'quit':
#         break
#     print("Adding", topping, "to your pizza!")
#     toppings.append(topping)

# pizza_price = 10 + (topping_price * len(toppings))

# print("Pizza toppings:", toppings)
# print("Total price: $", pizza_price)

#Exercise 9
# family_size = int(input("Enter the number of people in the family: "))

# total_cost = 0

# for i in range(family_size):
#     age = int(input("Enter the age of person {}: ".format(i + 1)))
#     if age < 3:
#         ticket_price = 0
#     elif age <= 12:
#         ticket_price = 10
#     else:
#         ticket_price = 15
#     total_cost += ticket_price

# print("Total cost of tickets: $", total_cost)

# names = ["Alice", "Bob", "Charlie", "David", "Eve"]
# restricted_ages = range(16, 22)

# allowed_names = []

# for name in names:
#     age = int(input("Enter the age of {}: ".format(name)))
#     if age in restricted_ages:
#         allowed_names.append(name)

# print("Final list of allowed names:", allowed_names)

#Exercise 10
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")

# finished_sandwiches = []

# while sandwich_orders:
#     sandwich = sandwich_orders.pop(0)
#     finished_sandwiches.append(sandwich)
#     print("I made a", sandwich)

