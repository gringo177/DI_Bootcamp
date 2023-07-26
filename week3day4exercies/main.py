#Exercise1
import random

def get_words_from_file(file_path):
    with open(file_path, 'r') as file:
        words = file.read().splitlines()
    return words

def get_random_sentence(length, words_list):
    sentence_words = random.sample(words_list, length)
    sentence = ' '.join(sentence_words).lower() + '.'
    return sentence

def main():
    print("Welcome to the random sentence generator!")
    try:
        sentence_length = int(input("Enter the length of the sentence (2 to 20): "))
        if not (2 <= sentence_length <= 20):
            raise ValueError("Sentence length must be between 2 and 20.")
    except ValueError as e:
        print(f"Error: {e}")
        return

    words_list = get_words_from_file("word_list.txt")
    sentence = get_random_sentence(sentence_length, words_list)
    print(f"Random sentence: {sentence}")

if __name__ == "__main__":
    main()

#Exercise2
import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)  

data["company"]["employee"]["birth_date"] = "1990-01-01"

with open("modified_data.json", "w") as file:
    json.dump(data, file, indent=4)

print("Data saved to 'modified_data.json'.")
