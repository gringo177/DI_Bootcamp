
from anagram import AnagramChecker

def get_user_input():
    while True:
        user_input = input("Enter a word (or type 'exit' to quit): ").strip().lower()
        if user_input == 'exit':
            return None
        elif ' ' in user_input:
            print("Error: Only a single word is allowed.")
        elif not user_input.isalpha():
            print("Error: Only alphabetic characters are allowed.")
        else:
            return user_input

def display_anagrams(word, anagrams):
    print(f"Anagrams for '{word}':")
    if not anagrams:
        print("None found.")
    else:
        for idx, anagram in enumerate(anagrams, start=1):
            print(f"{idx}. {anagram}")

def main():
    wordlist_file = "sowpods.txt"
    anagram_checker = AnagramChecker(wordlist_file)

    while True:
        word = get_user_input()
        if word is None:
            print("Goodbye!")
            break
        else:
            if anagram_checker.is_valid_word(word):
                anagrams = anagram_checker.get_anagrams(word)
                display_anagrams(word, anagrams)
            else:
                print(f"'{word}' is not a valid word.")

if __name__ == "__main__":
    main()
