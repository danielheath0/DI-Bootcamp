# # #Exercise 1 : What Are You Learning ?

# def display_message():
#     """Displays what I'm learning"""
#     return "I am learning Python!"

# print(display_message())

# #Exercise 2: What’s Your Favorite Book ?
# def favorite_book(title):
#    
#     return "My favorite book is "+ title

# print(favorite_book("The Fountainhead"))

# #Exercise 3 : Some Geography
# 
# def describe_city(city,country="Israel"):
   
#     return city + " is in " + country

# print(describe_city("Reykjavik","Iceland"))
# print(describe_city("Jerusalem"))

# # #Exercise 4 : Random
# import random
# def guess_number(number:int):
#     '''A guessing game'''
#     random_number = random.randint(1,100)
#     if random_number == number:
#         print(f"Well done! {number} = {random_number}!")
#     else:
#         print(f"Sorry - {number} is not {random_number}.")
# guess_number(5)

# #Exercise 5 : Let’s Create Some Personalized Shirts !
# def make_shirt(size:str="Large", message:str="I love Python"):
#     return f"The size of the shirt is {size} and the text is \"{message}\"."

# print(make_shirt())
# print(make_shirt("Medium"))
# print(make_shirt("Small","Female Body Inspector"))
# print(make_shirt(message="iPooed", size="Newborn"))

# #Exercise 6: Magicians...
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magicians:list):
#     for magician in magicians:
#         print(magician)

# show_magicians(magician_names)

# def make_great(magicians:list):
#     for magician in magicians:
#         target_index = magicians.index(magician)
#         magicians[target_index] =  magicians[target_index] + " the Great"
#         print(magicians)
        
# make_great(magician_names)
# show_magicians(magician_names)

# #Exercise 7: Temperature Advice
# import random
# def get_random_temp(season):
#     if season == "spring":
#         return random.randint(12,24)
#     elif season == "summer":
#         return random.randint(25,40)    
#     elif season == "autumn":
#         return random.randint(15,27)    
#     elif season == "winter":
#         return random.randint(-5,15)
# # print(get_random_temp())

# def main(season):
#     weather_today = get_random_temp(season)
#     print (f"The temperature today is {weather_today} degrees Celsius.")
#     if weather_today < 0:
#         print("It's freezing! Best not to drive today.")
#     elif weather_today in range(0,16):
#         print("It's chilly! Bring a coat.")
#     elif weather_today in range(16,23):
#         print("It's quite nice today.")
#     elif weather_today in range(23,32):
#         print("Nice and warm! You'll probably need sunscreen.")
#     elif weather_today > 32:
#         print("It's dangerously hot today. Make sure you hydrate, and stay in the shade where you can!")
    
# main(input("What season is it?"))

# #Exercise 8
# data = [
#     {"question": "What is Baby Yoda's real name?","answer": "Grogu"},
#     {"question": "Where did Obi-Wan take Luke after his birth?",
#     "answer": "Tatooine"},
#     {"question": "What year did the first Star Wars movie come out?","answer": "1977"},
#     {"question": "Who built C-3PO?","answer": "Anakin Skywalker"},  {"question": "Anakin Skywalker grew up to be who?","answer": "Darth Vader"},
#     {"question": "What species is Chewbacca?","answer": "Wookiee"}
# ]

# def quiz():
#     global data
#     correct = 0
#     incorrect = 0
#     wrong_answers = []
#     for i in range(len(data)):
#         print(data[i]["question"])
#         answer = input("What is the answer? ")
#         if answer == data[i]["answer"]:
#             print("Well done!")
#             correct+=1
#         else:
#             print("Incorrect.")
#             incorrect +=1
#             wrong_answers.append(answer)
#     print(f"You got {correct} questions right.")
#     print(f"You got {incorrect} questions wrong")
#     print(wrong_answers)
# quiz()