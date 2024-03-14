from itertools import product
import random

# #Part 1

# print('A class is a blueprint for creating objects that define attributes and methods they possess.')
# print('An instance is a specific realisation of a class, ie a unique object of that type.')
# print('Encapsulation is the bundling of attributes and functions that operate in a class to control interactions.')
# print('Abstraction is the simplification of complex systems by hiding unnecessary details to allow users to focus on higher-level concepts.')
# print('Inheritance is where a child class can utilise the features of its parent class.')
# print('Multiple inheritance is inheriting from more than one superclass')
# print('Polymorphism is when objects can do different things by using the same word')
# print('MRO is the order in which classes are searched for a method or attribute.')

# Part 2


class Card:
    def __init__(self, value, suit):
        self.suit = suit
        self.value = value


suits = ("Hearts", "Diamonds", "Clubs", "Spades")
values = (
    "Ace",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King",
)


def make_deck():
    deck = []
    for v in product(values, suits):
        card_name = f"{values}_of_{suits}"
        card = Card(values, suits)
        globals()[card_name] = card
        deck.append(v)
    return deck


class Deck:
    def __init__(self, cards):
        self.cards = cards

    def check_deck(self):
        card_set = set()
        for c in self.cards:
            card_set.add(c)
        if len(card_set) == 52:
            return f"Complete deck!"

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        print(self.cards.pop())


newdeck = Deck(make_deck())
newdeck.check_deck()
newdeck.shuffle()
print(newdeck.cards)
newdeck.deal()
print(newdeck.cards)
