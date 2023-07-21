#Challenge 1
# def main():
    
#     input_str = input("Enter comma-separated words: ")
#     words_list = [word.strip() for word in input_str.split(',')]
#     sorted_words = sorted(words_list)
#     output_str = ",".join(sorted_words)
#     print("Sorted words:", output_str)

# if __name__ == "__main__":
#     main()

    #Challenge 2
# def longest_word(sentence):
  
#     words = sentence.split()
#     longest = ""
#     longest_length = 0
#     for word in words:
#         word_length = len(word)

#         if word_length > longest_length:
#             longest = word
#             longest_length = word_length

#     return longest

# print(longest_word("Margaret's toy is a pretty doll."))  
# print(longest_word("A thing of beauty is a joy forever."))  
# print(longest_word("Forgetfulness is by all means powerless!")) 
