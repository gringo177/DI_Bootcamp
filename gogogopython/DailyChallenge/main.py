# string = input("Enter a string (10 characters long)")
# first_character = string[0]
# last_character = string[-1]
# print("First character:", first_character)
# print("Last character:", last_character)
# if len(string) < 10:
#     print("String not long enough.")
# elif len(string) > 10:
#     print("String too long.")
# else:
#     print("Perfect string.")
    
string = input("Enter a string (10 characters long)")
first_character = string[0]
last_character = string[-1]
print("First character:", first_character)
print("Last character:", last_character)
if len(string) < 10:
    print("String not long enough.")
elif len(string) > 10:
    print("String too long.")
else:
    print("Perfect string.")
for i in range(len(string)):
    print(string[:i+1])