#Exercise 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# my_dict = dict(zip(keys, values))
# print(my_dict)

#Exercise 2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# price_under_3 = 0
# price_3_to_12 = 10
# price_over_12 = 15
# total_cost = 0

# for member, age in family.items():
#     if age < 3:
#         cost = price_under_3
#     elif age <= 12:
#         cost = price_3_to_12
#     else:
#         cost = price_over_12

#     print(f"{member} has to pay ${cost}")
#     total_cost += cost

# print(f"\nTotal cost for the movies: ${total_cost}")





#Exersise3

# brand =  {'name': 'Zara', 
#              'creation_date': 1975, 
#              'creator_name': 'Amancio Ortega Gaona ',
#              'type_of_clothes': 'men, women, children, home ', 
#              'international_competitors': ['Gap', 'H&M', 'Benetton'],
#              'number_stores':7000,
#              'major_color' : {
#                  'France': 'blue',
#                  'Spain': 'red', 
#                  'US': 'pink, green'
#                  }
#             }
# more_on_zara = {'creation_date': 1975,
#                 'number_stores': 10000,
#                 }
                


# brand["number_stores"] = 2
# print(brand)

# brand["country_creation"] = "Spain"
# if "international_competitors" in brand:
#     brand["international_competitors"].append("Desigual")
#     del brand["creation_date"]
#     last_competitor = brand["international_competitors"][-1]
# print(last_competitor)
# us_colors = brand["major_color"]["US"]
# print(us_colors)
# num_pairs = len(brand)
# print(num_pairs)
# keys = brand.keys()
# print(keys)
# brand.update(more_on_zara)

#Exercice4
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# disney_users_A = {}
# for index, user in enumerate(users):
#     disney_users_A[user] = index

# print(disney_users_A)
# disney_users_B = {}
# for index, user in enumerate(users):
#     disney_users_B[index] = user

# print(disney_users_B)
# disney_users_C = dict(sorted(disney_users_A.items(), key=lambda x: x[0]))

# print(disney_users_C)

# disney_users_A = {}
# for index, user in enumerate(users):
#     if "i" in user:
#         disney_users_A[user] = index

# print(disney_users_A)

# disney_users_A = {}
# for index, user in enumerate(users):
#     if user.startswith(("m", "p")):
#         disney_users_A[user] = index

# print(disney_users_A)
