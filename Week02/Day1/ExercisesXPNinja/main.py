# x = (1 == True)
# y = (1 == False)
# a = True + 4
# b = False + 10

# print("x is",x)
# print("y is", y)
# print("a:", a)
# print("b", b)    

#Exercise 4

# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

# print(len(my_text))

record_tracker = 0

example_text = input("Please put in the longest sentence you can without the letter A! ")

if "a" in example_text:
    print("You have failed. Good bye.")
    
else:
    while True:
        if "a" in example_text:
            print(f"You have failed. Your largest string was {record_tracker} characters. Good bye.")
            break
        elif len(example_text) > record_tracker:
            record_tracker += len(example_text)
            example_text = input(f"Congratulations! You have set a new record of {record_tracker} characters! Now try again: ")
        else:
            example_text = input("Unlucky - this is not long enough, try again: ")
        
        