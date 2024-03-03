#Exercise 1

print ("Hello world\n"*4 + "I love python\n"*4)

#Exercise 2

spring = range(3, 5, 1)
summer = range(6, 8, 1)
autumn = range(9, 11, 1)


month = int(input("Please enter the number of a month: "))


if month > 12 or month < 1:
    print("This isn't a month.")
elif month in spring:
    print("Spring :)")
elif month in summer:
    print("Summer :D")
elif month in autumn:
    print("Autumn :|")
else:
    print("Winter :(")