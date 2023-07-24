#Exercises XP
#Exercise 1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):  
#     def sing(self, sounds):
#         return f'{sounds}'


# bengal_cat = Bengal("Bengal Cat", 3)
# chartreux_cat = Chartreux("Chartreux Cat", 4)
# siamese_cat = Siamese("Siamese Cat", 2)

# all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# sara_pets = Pets(all_cats)

# sara_pets.walk()

#Exercise2
# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f'{self.name} is barking'

#     def run_speed(self):
#         return self.weight / self.age * 10

#     def fight(self, other_dog):
#         self_score = self.run_speed() * self.weight
#         other_score = other_dog.run_speed() * other_dog.weight

#         if self_score > other_score:
#             return f'{self.name} won the fight!'
#         elif self_score < other_score:
#             return f'{other_dog.name} won the fight!'
#         else:
#             return 'It was a draw!'


# dog1 = Dog("Max", 5, 20)
# dog2 = Dog("Buddy", 3, 15)
# dog3 = Dog("Rocky", 4, 18)

# print(dog1.bark())
# print(f'{dog1.name}\'s running speed: {dog1.run_speed()}')
# print(dog2.bark())
# print(f'{dog2.name}\'s running speed: {dog2.run_speed()}')
# print(dog3.bark())
# print(f'{dog3.name}\'s running speed: {dog3.run_speed()}')

# winner = dog1.fight(dog2)
# print(winner)

# winner = dog2.fight(dog3)
# print(winner)

# winner = dog1.fight(dog3)
# print(winner)

#Exercise3

# import random

# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f'{self.name} is barking'

#     def run_speed(self):
#         return self.weight / self.age * 10

#     def fight(self, other_dog):
#         self_score = self.run_speed() * self.weight
#         other_score = other_dog.run_speed() * other_dog.weight

#         if self_score > other_score:
#             return f'{self.name} won the fight!'
#         elif self_score < other_score:
#             return f'{other_dog.name} won the fight!'
#         else:
#             return 'It was a draw!'


# class PetDog(Dog):
#     def __init__(self, name, age, weight):
#         super().__init__(name, age, weight)
#         self.trained = False

#     def train(self):
#         print(self.bark())
#         self.trained = True

#     def play(self, *dog_names):
#         print(f'{", ".join(dog_names)} all play together.')

#     def do_a_trick(self):
#         if self.trained:
#             trick_options = [
#                 f'{self.name} does a barrel roll',
#                 f'{self.name} stands on his back legs',
#                 f'{self.name} shakes your hand',
#                 f'{self.name} plays dead'
#             ]
#             print(random.choice(trick_options))
#         else:
#             print(f'{self.name} needs to be trained first!')


# if __name__ == "__main__":
#     pet_dog1 = PetDog("Buddy", 3, 15)
#     pet_dog2 = PetDog("Rocky", 4, 18)

#     pet_dog1.train()
#     pet_dog1.do_a_trick()
#     pet_dog1.play("Max", "Charlie")

#     pet_dog2.do_a_trick()
#     pet_dog2.train()
#     pet_dog2.do_a_trick()

