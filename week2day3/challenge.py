#Challenge 1
word = input("Enter a word: ")
letter_dict = {}

for index, letter in enumerate(word):
    if letter not in letter_dict:
        letter_dict[letter] = []
    letter_dict[letter].append(index)

print("Letter Dictionary:")
for letter, indexes in letter_dict.items():
    print(f"{letter}: {indexes}")

#Challenge 2
def afford_items(wallet_amount, store_items):
    affordable_items = []
    
    for item in store_items:
        if wallet_amount >= item['price']:
            affordable_items.append(item['name'])
    
    if not affordable_items:
        return "Nothing"
    
    affordable_items.sort()
    return affordable_items

wallet = 50
store = [
    {"name": "Apple", "price": 10},
    {"name": "Banana", "price": 20},
    {"name": "Orange", "price": 15},
    {"name": "Mango", "price": 30},
    {"name": "Pineapple", "price": 25},
    {"name": "Grapes", "price": 40}
]

result = afford_items(wallet, store)
print("Affordable items:", result)
