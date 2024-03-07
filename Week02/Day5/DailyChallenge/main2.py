#Daily Challenge Advanced Algorithm

import random, itertools

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728
counter = 0
new_list = []

for i in range(len(list_of_numbers)):
    if list_of_numbers[i] <= target_number:
        new_list.append(list_of_numbers[i])

for j in new_list:
    if target_number - j in new_list:
        counter +=1
            
print(len(new_list))
print(counter//2)            
        