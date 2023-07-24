#Exercises XP+
#Exercise1
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} was born in the {self.last_name} family.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        print("Family Members:")
        for member in self.members:
            print(member['name'])


initial_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Smith", initial_members)

my_family.born(name='John', age=1, gender='Male', is_child=True)

print(my_family.is_18('Michael'))
print(my_family.is_18('Sarah'))
print(my_family.is_18('John'))

my_family.family_presentation()

#Exercise 2
# class Family:
#     def __init__(self, last_name, members):
#         self.last_name = last_name
#         self.members = members

#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print(f"Congratulations! {kwargs['name']} was born in the {self.last_name} family.")

#     def is_18(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 return member['age'] >= 18
#         return False

#     def family_presentation(self):
#         print(f"Family Name: {self.last_name}")
#         print("Family Members:")
#         for member in self.members:
#             print(member['name'])


# class TheIncredibles(Family):
#     def __init__(self, last_name, members):
#         super().__init__(last_name, members)

#     def use_power(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 if member['age'] >= 18:
#                     print(f"{name}'s power: {member['power']}")
#                 else:
#                     raise Exception(f"{name} is not over 18 years old and cannot use their power.")

#     def incredible_presentation(self):
#         super().family_presentation()
#         print("Incredible Members:")
#         for member in self.members:
#             print(f"{member['incredible_name']} - Power: {member['power']}")


# initial_members = [
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
# ]

# the_incredibles_family = TheIncredibles("Incredibles", initial_members)

# the_incredibles_family.incredible_presentation()

# the_incredibles_family.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='Little Jack')

# the_incredibles_family.incredible_presentation()
