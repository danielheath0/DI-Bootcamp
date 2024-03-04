import random

exercise_string = input("Please feed me a 10-character string!")

if len(exercise_string) < 10:
    print("Not long enough!")
    
elif len(exercise_string) > 10:
    print("Too long!")
    
elif len(exercise_string) == 10:
    print(exercise_string[0], exercise_string[-1])
    
    counter = ""
    for i in exercise_string:
        counter = counter + i
        print(counter)
        
    newlist = list(counter)
    random.shuffle(newlist)
    print("".join(newlist))