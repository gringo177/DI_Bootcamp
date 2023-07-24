#To implement the Farm class, we need to define it and include the necessary methods to manage
# animals on the farm. The Farm class should have an __init__ method, which will be called when creating 
#a new instance of the class. This method will initialize the attributes of the class.
# init method: Yes, the Farm class needs an __init__ method. This method should be responsible for initializing the farm name and animals dictionary.

# Parameters for init method: The __init__ method should take one parameter, farm_name, which represents the name of the farm.

# Methods for the Farm class: The Farm class should have the following methods:

# __init__(self, farm_name): The constructor to initialize the farm with the given farm_name.
# add_animal(self, animal_type, count=1): Method to add animals to the farm. It should take two parameters: animal_type, which represents the type of the animal (e.g., "cow", "sheep", "goat"), and an optional parameter count, which represents the number of animals of that type to add (default is 1).
# get_info(self): Method to get detailed information about the animals on the farm.
# get_animal_types(self): Method to get a sorted list of all animal types (names) on the farm.
# get_short_info(self): Method to get a short summary of the animals on the farm.
# Calling add_animal method: The add_animal method is called without providing the optional count parameter, which means if the animal type is already present on the farm, the count of that animal will be increased by 1. If the animal type is not present, it will be added with a count of 1.
class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        info_str = f"{self.name}'s farm\n"
        for animal, count in self.animals.items():
            info_str += f"{animal} : {count}\n"
        return info_str

    def get_animal_types(self):
        animal_types = sorted(self.animals.keys())
        return animal_types

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_str = ", ".join(animal_types)
        short_info = f"{self.name}'s farm has {animal_str}."
        return short_info


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())

animal_types = macdonald.get_animal_types()
print("Animal types:", animal_types)

short_info = macdonald.get_short_info()
print(short_info)
