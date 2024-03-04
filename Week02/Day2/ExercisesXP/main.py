# #Exercise 1

# my_fav_numbers = {3, 11, 16}
# my_fav_numbers.add(2)
# my_fav_numbers.add(0)
# print(my_fav_numbers)

# friend_fav_numbers = {12, 11, 99}

# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# print(our_fav_numbers)

# #Exercise 2

# print("\n \n \nYes it is possible to add more integers to a tuple but you have to convert it to a list first:")

# my_tuple = (1, 1, 2, 3, 5)
# print(my_tuple)

# my_tuple = list(my_tuple)

# my_tuple.append(8)
# my_tuple.append(13)


# my_tuple = tuple(my_tuple)

# print(my_tuple)

# #Exercise 3

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# basket.pop(basket.index('Banana'))
# basket.pop(basket.index('Blueberries'))
# basket.append("Kiwi")
# basket.insert(0,"Apples" )

# print(basket.count("Apples"))

# basket.clear()

# print(basket)

# #Exercise 4

# print("A float is a number which is not an integer, i.e. a decimal or a fraction")

# #First method - divide numbers from 3 to 10 by 2 and add to list
# float_list = []
# for whole_number in range(3,11):
#     float_list.append(whole_number / 2)
# print(float_list)    

# float_list2 = []
# protonumber = 1

# #Second method - starting from 1, add 0.5 several times
# for whole_number in range(3,11):
#    protonumber += 0.5
#    float_list2.append(protonumber)
# print(float_list2)

# #Note - I have assumed it is ok that the whole numbers are also floats, e.g 2.0 rather than 2

# #Exercise 5
# for_set = []
# for whole_number in range(1,21):
#     for_set.append(whole_number)
# print(for_set) # prints list of numbers from 1 to 20
    
# for check_index in range(0,20):
#     if check_index % 2 == 0:
#         print(for_set[check_index]) 
#     else:
#         continue    # prints only if index is even, otherwise continues loop
    
    
# #Exercise 6

# user_name = ""

# while user_name != "Daniel":
#     user_name = input("What is your name? ")
    
# #Exercise 7

# fav_fruits = input("What are your favorite fruits? Please separate your answers with spaces. ")

# fav_fruits_list = fav_fruits.split()

# print(fav_fruits_list)

# query_fruit = input("Please enter the name of a fruit: ")

# if query_fruit in fav_fruits_list:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit! I hope you enjoy!")
    
# #Exercise 8

# topping = ""
# topping_list = []
# while topping != "quit":
#     topping = input("Please choose a pizza topping. When you have finished please type \"quit\". ")
#     if topping !="quit":
#         topping_list.append(topping)
#         print(f"I have added {topping} to your pizza")
#     else:
#         break

# print(f"Your pizza will come with {topping_list}.")
# price = (len(topping_list))*2.5 + 10
# print(f"Your total price is {price} shekels")

#Exercise 9
