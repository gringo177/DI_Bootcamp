class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        word_count = words.count(word)
        if word_count > 0:
            return word_count
        else:
            return None

    def most_common_word(self):
        words = self.text.split()
        word_counts = {}
        for word in words:
            word_counts[word] = word_counts.get(word, 0) + 1

        if not word_counts:
            return None

        most_common = max(word_counts, key=word_counts.get)
        return most_common

    def unique_words(self):
        words = self.text.split()
        unique_words = list(set(words))
        return unique_words


text_string = "A good book would sometimes cost as much as a good house."
text_instance = Text(text_string)


print(text_instance.word_frequency("good"))  
print(text_instance.word_frequency("house"))  
print(text_instance.word_frequency("car"))   


print(text_instance.most_common_word())  


print(text_instance.unique_words())  