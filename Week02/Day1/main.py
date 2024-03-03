number = int(input("Please input an integer between 1 and 100: "))

print(number)

if number < 1:
    print("Your number is too small!")
elif number > 100:
    print("Your number is too big!")
elif number % 3 == 0 and number % 5 != 0:
    print("Fizz!")    
elif number % 5 == 0 and number % 3 != 0:
    print("Buzz!")
elif number % 3 == 0 and number % 5 == 0:
    print("FizzBuzz!")
else:
    print("This number is neither Fizz nor Buzz!")