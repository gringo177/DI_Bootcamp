from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print("Menu Editor:")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")

def add_item_to_menu():
    name = input("Enter item name: ")
    price = int(input("Enter item price: "))
    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    name = input("Enter item name to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print("Item was deleted successfully.")
    else:
        print("Error: Item not found.")

def update_item_from_menu():
    name = input("Enter item name to update: ")
    item = MenuManager.get_by_name(name)
    if item:
        new_name = input("Enter new item name: ")
        new_price = int(input("Enter new item price: "))
        item.update(new_name, new_price)
        print("Item was updated successfully.")
    else:
        print("Error: Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("Restaurant Menu:")
    for item in items:
        print(f"{item.name}: ${item.price}")

if __name__ == "__main__":
    while True:
        show_user_menu()
        choice = input("Enter your choice (V/A/D/U/S): ").upper()
        if choice == "V":
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"{item.name}: ${item.price}")
            else:
                print("Item not found.")
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        else:
            print("Invalid choice.")
        
        exit_choice = input("Do you want to exit? (Y/N): ").upper()
        if exit_choice == "Y":
            show_restaurant_menu()
            break
