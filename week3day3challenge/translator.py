from googletrans import Translator

def translate_words(words_list, source_language='fr', target_language='en'):
    translator = Translator()
    translations = translator.translate(words_list, src=source_language, dest=target_language)
    result = {original.text: translated.text for original, translated in zip(words_list, translations)}
    return result

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translation_result = translate_words(french_words)

print(translation_result)
