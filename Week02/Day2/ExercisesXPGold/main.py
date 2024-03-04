# # #Exercise 1

# # list1 = ["item1","item2","item3"]

# # list2 = ["itemA","itemB","itemC"]

# # for item in list2:
# #     list1.append(item)
# #     print(list1)

# # #Exercise 2
# # multiple_list = []
# # for number in range(1500,2501):
# #     if number % 5 == 0 or number % 7 == 0:
# #         multiple_list.append(number)
# #     else:
# #         continue
    
# # print(multiple_list)

# # #Exercise 3
# # names = ['Samus', 'Cortana','V', 'Link','Mario','Cortana','Samus']

# # user_input = input("What is your name? ")

# # if user_input not in names:
# #     print("Sorry - not in list")
# # else:
# #     print(names.index(user_input))

# # #Exercise 4

# # number1 = int(input("Please enter the first number: "))
# # number2 = int(input("Please enter the second number: "))
# # number3 = int(input("Please enter the third number: "))

# # number_group = [number1,number2,number3]

# # print(f"The largest number is {max(number_group)}")

# #Exercise 5

# # alphabet_string = ""

# # for i in range(97,123):
# #     alphabet_string = alphabet_string + chr(i)
    
# # print(alphabet_string)

# # for letter in alphabet_string:
# #     if letter in ["a","e","i","o","u"]:
# #         print(f"{letter} is a vowel!")
# #     else:
# #         print(f"{letter} is a consonant!")


# #Exerise 6
# # words_input = input("Please give me seven words separated by spaces: ")

# # words = words_input.split()

# # #print(words)

# # letter = input("Please give me a single letter: ")

# # for word in words:
# #     if letter in word:
# #         print(word.index(letter))
# #     else:
# #         print(f"Sorry, there is no {letter.upper()} in {word}!")

# #Exercise 7

# # list_of_numbers = []
# # for r in range(1000001):
# #     list_of_numbers.append(r)
# # print(min(list_of_numbers))
# # print(max(list_of_numbers))

# # print(sum(list_of_numbers))

# #Exercise 8

# # input_list = input("Please feed me numbers separated by commas: ")

# # output_list = input_list.split(",")
# # output_tuple = tuple(output_list)

# # print(output_list)
# # print(output_tuple)

# #Exercise 9

# import random

# guess = input("Number between 1 and 9 please: ")

# correct = random.randint(1,10)

# counter = 0

# while True:
#     if int(guess) == correct:
#         print("Winner!")
#         counter += 1
#         break
#     elif guess == "quit":
#         break    
#     else:
#         print("Better luck next time :(")
#         guess = input("Number between 1 and 9 please: ")
#         counter +=1
        
# print(f"It took you {counter} tries!")        