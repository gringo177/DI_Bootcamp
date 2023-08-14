from django.http import HttpResponse
from .data import animals, families  # Import the data arrays

def display_all_animals(request):
    animal_list = [animal["name"] for animal in animals]
    return HttpResponse("\n".join(animal_list))

def display_all_families(request):
    family_list = [family["name"] for family in families]
    return HttpResponse("\n".join(family_list))

def display_one_animal(request, animal_id):
    try:
        animal = next(animal for animal in animals if animal["id"] == animal_id)
        return HttpResponse(f"Name: {animal['name']}\nLegs: {animal['legs']}\nWeight: {animal['weight']}\nHeight: {animal['height']}\nSpeed: {animal['speed']}")
    except StopIteration:
        return HttpResponse("Animal not found")

def display_animal_per_family(request, family_id):
    animals_in_family = [animal["name"] for animal in animals if animal["family"] == family_id]
    return HttpResponse("\n".join(animals_in_family))