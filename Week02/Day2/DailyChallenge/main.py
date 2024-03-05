# #Challenge 1

# number = int(input("Please enter a number: "))
# length = int(input("Please enter a length: "))

# sequence = []

# for i in range(1,length + 1):
#     sequence.append(i*number)
    

# print(sequence)  


#Challenge 2

userword = input("Please enter a word: ")

result = [""]

for letter in userword:
    if letter != result[-1]:
        result.append(letter)
    
# result.pop(0)    
print("".join(result))