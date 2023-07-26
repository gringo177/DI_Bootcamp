import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if not self.is_empty():
            return self.cards.pop()
        else:
            return None

    def is_empty(self):
        return len(self.cards) == 0

if __name__ == "__main__":
    deck = Deck()
    deck.shuffle()

    player_hand = []
    for _ in range(5):
        card = deck.deal()
        if card:
            player_hand.append(card)

    print("Player's hand:")
    for card in player_hand:
        print(card)
