import random, json


# # Exercise 1 - Random Sentence Generator
# def get_words_from_file():
#     with open("sowpods.txt", "r") as f:
#         collection = f.read().splitlines()
#         return collection


# def get_random_sentence(length):
#     sentence_list = []
#     for i in range(length):  #
#         index = random.randint(0, len(get_words_from_file()))
#         sentence_list.append(get_words_from_file()[index])
#     return sentence_list


# def main():
#     length = input(
#         "This program give you a list of random words! Please indicate how many you would like (2-20): "
#     )
#     if not length.isdigit():
#         raise Exception("Error - not an integer!")

#     elif int(length):
#         if int(length) < 2:
#             raise Exception("Error - too small!")
#         elif int(length) > 20:
#             raise Exception("Error - too big!")
#         else:
#             sentence_list = get_random_sentence(int(length))
#             sentence = " ".join([str(item).lower() for item in sentence_list])
#             print(sentence)


# main()

#Exercise 2 - Working with JSON

json_file = 'sampleJson.json'

with open(json_file, 'r') as file_obj:
    my_new_dict = json.load(file_obj)
    
print(my_new_dict['company']['employee']['payable']['salary'])  

my_new_dict['company']['employee']['birth_date'] = ""

print(my_new_dict)

new_json_file = 'newJson.json'
with open(new_json_file, 'w') as new_file_obj:
    json.dump(my_new_dict, new_file_obj, indent=2, sort_keys=True)

