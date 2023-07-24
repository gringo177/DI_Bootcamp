# #Exercise1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("Fluffy", 3)
# cat2 = Cat("Whiskers", 5)
# cat3 = Cat("Mittens", 2)
# def find_oldest_cat(cat_list):
#     oldest_cat = None
#     max_age = -1

#     for cat in cat_list:
#         if cat.age > max_age:
#             max_age = cat.age
#             oldest_cat = cat

#     return oldest_cat
# cat_list = [cat1, cat2, cat3]

# oldest_cat = find_oldest_cat(cat_list)

# print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# #Exercise2
# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         jump_height = self.height * 2
#         print(f"{self.name} jumps {jump_height} cm high!")

# davids_dog = Dog("Rex", 50)

# print(f"David's dog: {davids_dog.name}, Height: {davids_dog.height}cm")
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup", 20)

# print(f"Sarah's dog: {sarahs_dog.name}, Height: {sarahs_dog.height}cm")
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print(f"{davids_dog.name} is the bigger dog.")
# elif davids_dog.height < sarahs_dog.height:
#     print(f"{sarahs_dog.name} is the bigger dog.")
# else:
#     print("Both dogs have the same height.")

# #Exercise3
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway = Song([
#     "There’s a lady who's sure",
#     "all that glitters is gold",
#     "and she’s buying a stairway to heaven"
# ])

# stairway.sing_me_a_song()

# #Exercise4
# class Zoo:
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []

#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)

#     def get_animals(self):
#         print("Animals in the zoo:")
#         for animal in self.animals:
#             print(animal)

#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
#             print(f"{animal_sold} has been sold.")

#     def sort_animals(self):
#         sorted_animals = {}
#         for animal in self.animals:
#             first_letter = animal[0].upper()
#             if first_letter in sorted_animals:
#                 sorted_animals[first_letter].append(animal)
#             else:
#                 sorted_animals[first_letter] = [animal]

#         return sorted_animals

#     def get_groups(self):
#         sorted_animals = self.sort_animals()
#         print("Animals grouped by the first letter:")
#         for group_num, animals in sorted_animals.items():
#             if len(animals) == 1:
#                 print(f"{group_num}: {animals[0]}")
#             else:
#                 print(f"{group_num}: {animals}")

# ramat_gan_safari = Zoo("Ramat Gan Safari")
# ramat_gan_safari.add_animal("Ape")
# ramat_gan_safari.add_animal("Baboon")
# ramat_gan_safari.add_animal("Bear")
# ramat_gan_safari.add_animal("Cat")
# ramat_gan_safari.add_animal("Cougar")
# ramat_gan_safari.add_animal("Eel")
# ramat_gan_safari.add_animal("Emu")
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sell_animal("Emu")
# ramat_gan_safari.get_animals()
# ramat_gan_safari.get_groups()
