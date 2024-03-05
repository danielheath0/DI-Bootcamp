# # # #Exercise 1

# # # keys = ['Ten', 'Twenty', 'Thirty']
# # # values = [10, 20, 30]


# # # print(dict(zip(keys,values)))

# # # #Exercise 2

# # # family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# # # # print(family["rick"])
# # # # print(family.values())

# # # # for age in family.values():
# # # #     if age in range(3,12):
# # # #         print(10)
# # # #     elif age >= 12:
# # # #         print(15)
# # # total_cost = 0
# # # for key,value in family.items():
# # #     if value in range(3,12):
# # #         print(f"{key.capitalize()} must pay $10")
# # #         total_cost += 10
# # #     elif value >= 12:
# # #         print(f"{key.capitalize()} must pay $15")
# # #         total_cost += 15
# # #     else:
# # #         print(f"{key.capitalize()} doesn't have to pay")
        
# # # print (f"The total cost is ${total_cost}.")

# # # # new_family = {}

# # # # new_family_member = ["",""]
# # # # while new_family_member != ("quit",):
# # # #     detail = input("Please enter name and age separated by a space. Type quit to exit.")
# # # #     new_family_member = dict(zip(detail.split()))
# # # #     print(new_family_member)
# # # # #     new_family.update(dict(new_family_member))
# # # # #     print(new_family_member.items())

# # # # # print(new_family) come back to this

# # #Exercise 3
# # brand = {"name" : "Zara",
# #         "creation_date" : 1975, 
# #         "creator_name" : "Amancio Ortega Gaona", 
# #         "type_of_clothes": ["men", "women", "children", "home"], 
# #         "international_competitors" : ["Gap", "H&M", "Benetton"], 
# #         "number_stores" : 7000, 
# #         "major_color" : {"France" : "blue", "Spain": "red", "US": ["pink", "green"]}
# #         }

# # brand["number_stores"] = 2
# # print(brand)

# # print(f"Zara's customers are {brand["type_of_clothes"][0]}, {brand["type_of_clothes"][1]}, {brand["type_of_clothes"][2]} and people with {brand["type_of_clothes"][3]}s.")

# # brand["country_creation"] = "Spain"

# # print(brand)

# # if brand["international_competitors"]:
# #     brand["international_competitors"].append("Desigual")
    
# # print(brand)
    
# # brand.pop("creation_date")

# # print(brand["international_competitors"][-1])
# # print(brand["major_color"]["US"])
# # print(brand.keys())

# # more_on_zara = {"creation_date" : 1975, "number_stores" : 10000}

# # brand.update(more_on_zara)

# # print(brand)
# # print(brand["number_stores"]) # number 2 has been replaced by number 10000


# #Exercise 4
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# disney_users_A = {}
# disney_users_B = {}
# disney_users_C = {}
# disney_users_D = {}
# disney_users_E = {}

# #1
# for x,y in enumerate(users):
#     disney_users_A[y]=x
# print(disney_users_A)

# #2
# for x,y in enumerate(sorted(users)):
#     disney_users_B[x]=y
# print(disney_users_B)

# #3
# users_sorted = sorted(users)
# for x,y in enumerate(users_sorted):
#     disney_users_C[y]=x
# print(disney_users_C)

# #4
# for x,y in enumerate(users):
#     if "i" in y:
#         disney_users_D[y]=x
# print(disney_users_D)

# #5
# for x,y in enumerate(users):
#     if  y[0] == "M" or y[0] == "P":
#         disney_users_E[y]=x
# print(disney_users_E)