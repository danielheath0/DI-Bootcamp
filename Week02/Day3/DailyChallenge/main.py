# #Challenge 1
# word = input("Give me a word yo: ")


# word_list = [*word]
# word_dict = {}

# for x,y in enumerate(word_list):
#     if y in word_dict:
#         word_dict[y].append(x)
#     else:    
#         word_dict[y] = [x]
    


# print(word_dict)

#Challenge 2

# items_purchase = {
#     "milk" : "$2",
#     "bread" : "$1",
#     "car" : "$14,000",
#     "burekas" : "$3",
#     "coffee" : "$4",
#     "sushi" : "$12",
#     "shawarma" : "$20",
#     "champagne" : "$30"
# }
# wallet = "$" + input("How many dollars do you have? ")

# wallet_value = int(wallet.replace("$",""))

# basket = []

# for item in items_purchase.items():
#     price = item[1].replace("$","")
#     if "," in price:
#         price = price.replace(",","")
#     price = int(price)
    
#     if price <= wallet_value:
#         basket.append(item[0])
#         wallet_value -= price    
        
# if basket != []:
#     print(f"You can afford {sorted(basket)}. You have ${wallet_value} remaining.")    
# else:
#     print("Nothing")