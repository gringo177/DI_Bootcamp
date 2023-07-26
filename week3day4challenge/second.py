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

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            text = file.read()
        return cls(text)

text_file_instance = Text.from_file('wordword.txt')


print(text_file_instance.word_frequency("the"))  
print(text_file_instance.word_frequency("stranger"))  
print(text_file_instance.word_frequency("apple"))  


print(text_file_instance.most_common_word())  


print(text_file_instance.unique_words())
