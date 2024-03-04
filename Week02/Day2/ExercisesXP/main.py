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

# guest_age = input("Please enter ages of guests separated by spaces:")

# guest_age_list = guest_age.split()
# print(guest_age_list) # list of ages as strings

# for age_index in range(len(guest_age_list)):
#     guest_age_list[age_index] = int(guest_age_list[age_index])
    
# print(guest_age_list) # list of ages as integers


# count_baby = 0
# count_child = 0
# count_adult = 0

# for age_index in range(len(guest_age_list)):
#     if guest_age_list[age_index] <3:
#         count_baby += 1
#     elif guest_age_list[age_index] >= 12:
#         count_adult += 1
#     else:
#         count_child += 1

# total_cost = count_baby*0 + count_child*10 + count_adult*15

# print(f"The total cost is ${total_cost}.")

# list_of_names = ["Simon", "Jane", "Adam", "Sonya"]
# temp_list = []
# for teenager in list_of_names:

#     old_enough = int(input(f"How old is {teenager}? "))
#     if old_enough in range(16,22):
#        temp_list.append(teenager)
#     else:
#         continue        

# list_of_names = temp_list

# print(list_of_names)


#Exercise 10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    
print(sandwich_orders)

finished_sandwiches = []
for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
    

sandwich_orders.clear()

    
print(finished_sandwiches)
print(sandwich_orders)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}.")    