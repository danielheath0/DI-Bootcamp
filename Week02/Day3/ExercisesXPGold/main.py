# #Perfect number test

# test_number = int(input("Please enter a number: "))

# divisor_list = []
# for i in range(1,test_number):
#     if test_number % i == 0:
#         divisor_list.append(i)
# divisor_sum = sum(divisor_list)        

# if test_number == divisor_sum:
#     print(f"{test_number} is a perfect number!")
# else:
#     print("Unlucky.")

# #Exercise 1 - Birthday Look-Up

# birthdays = {
#     "Yarden" : "1984/11/03",
#     "Mira" : "1952/07/13",
#     "Yossi" : "1948/10/09",
#     "Gaya" : "2012/03/06",
#     "Tamar" : "2010/02/24"
#     }

# print("Welcome! You can look up the birthdays of the people in the list!")

# query_name = input("Enter a name: ")
# birthday = birthdays[query_name]
# print(f"{query_name}'s birthday is {birthday}.")

#Exercise 2

birthdays = {
    "Yarden" : "1984/11/03",
    "Mira" : "1952/07/13",
    "Yossi" : "1948/10/09",
    "Gaya" : "2012/03/06",
    "Tamar" : "2010/02/24"
    }

print("Welcome! You can look up the birthdays of the people in the list!")

for key in birthdays.keys():
    print(key)

query_name = input("Enter a name: ")
if query_name not in birthdays:
    print(f"Sorry - we don't have the birthday information for {query_name}.")

else:
    birthday = birthdays[query_name]
    print(f"{query_name}'s birthday is {birthday}.")