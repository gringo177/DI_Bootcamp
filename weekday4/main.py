# from random import randint
# Exercise1
# def display_message():
#     msg = "I'm learning to store code in functions."
#     print(msg)

# display_message()

#Exercise2
# def favorite_book(title):
#     print(title + " is one of my favorite books.")

# favorite_book('The Abstract Wild')

#Exercise3
# def describe_city(city, country='chile'):
#     msg = city.title() + " is in " + country.title() + "."
#     print(msg)

# describe_city('santiago')
# describe_city('reykjavik', 'iceland')
# describe_city('punta arenas')

#Exercise4
# from random import *
# print(input(randint(1, 100)))
# if input == random:
#    print("success")
# else:
#    print("fail")

#Exercise5
# def make_shirt(size,message):
#    print("\nIm going to make a " + size + " t-shirt")
#    print('It will say, "' + message + '"')

# make_shirt('large', 'i love python') 
# make_shirt(message="it counts ", size=' medium ')

# def make_shirt(size='large', message='i love it'):
#     print("\nim going to make a " + size + "t-shirt")
#     print('It will say, "' + message + '"')

# make_shirt()
# make_shirt(size='medium')
# make_shirt('small', 'programmers are loopy')

#Exercise6
# def show_magicians(magicians):
#      for magician in magicians:
#           print(magician.title())

# magicians = ['harry houdini', 'david blaine', 'teller'] 
# show_magicians(magicians)  

# def show_magicians(magicians):
#     for magician in magicians:
#         print(magician)

# def make_great(magicians):
    
    
#     great_magicians = []

    
#     while magicians:
#         magician = magicians.pop()
#         great_magician = magician + ' the Great'
#         great_magicians.append(great_magician)

#     for great_magician in great_magicians:
#         magicians.append(great_magician)

# magicians = ['Harry Houdini', 'David Blaine', 'Teller']
# show_magicians(magicians)

# print("\n")
# make_great(magicians)
# show_magicians(magicians)

#Exercise7
# def get_random_temp():
#     temp = randint(-10,40)
#     return temp
# print(get_random_temp())

# def main():

#     random_temp = get_random_temp()
#     print(f"The temperature right now {random_temp}  degrees Celsius.")
# main()
# if get_random_temp < 0:
#     print("Brrr thats freezing! Wear some extra layers today")





#Exercise8
def ask_questions_and_check_answers(data):
    num_correct = 0
    num_incorrect = 0
    wrong_answers = []

    for entry in data:
        question = entry["question"]
        correct_answer = entry["answer"]

        user_answer = input(f"{question} ")
        if user_answer.strip().lower() == correct_answer.lower():
            print("Correct!\n")
            num_correct += 1
        else:
            print(f"Wrong! The correct answer is '{correct_answer}'.\n")
            num_incorrect += 1
            wrong_answers.append({"question": question, "user_answer": user_answer, "correct_answer": correct_answer})

    return num_correct, num_incorrect, wrong_answers


def display_results(num_correct, num_incorrect, wrong_answers):
    print("Results:")
    print(f"Correct answers: {num_correct}")
    print(f"Incorrect answers: {num_incorrect}")

    if num_incorrect > 0:
        print("Wrong Answers:")
        for idx, wrong_answer in enumerate(wrong_answers, 1):
            print(f"{idx}. Question: {wrong_answer['question']}")
            print(f"   Your Answer: {wrong_answer['user_answer']}")
            print(f"   Correct Answer: {wrong_answer['correct_answer']}\n")


if __name__ == "__main__":
    data = [
        {
            "question": "What is Baby Yoda's real name?",
            "answer": "Grogu"
        },
        {
            "question": "Where did Obi-Wan take Luke after his birth?",
            "answer": "Tatooine"
        },
        {
            "question": "What year did the first Star Wars movie come out?",
            "answer": "1977"
        },
        {
            "question": "Who built C-3PO?",
            "answer": "Anakin Skywalker"
        },
        {
            "question": "Anakin Skywalker grew up to be who?",
            "answer": "Darth Vader"
        },
        {
            "question": "What species is Chewbacca?",
            "answer": "Wookiee"
        }
    ]

    num_correct, num_incorrect, wrong_answers = ask_questions_and_check_answers(data)
    display_results(num_correct, num_incorrect, wrong_answers)

    