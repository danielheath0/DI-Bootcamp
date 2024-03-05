test_number = int(input("Please enter a number: "))

divisor_list = []
for i in range(1,test_number):
    if test_number % i == 0:
        divisor_list.append(i)
divisor_sum = sum(divisor_list)        

if test_number == divisor_sum:
    print(f"{test_number} is a perfect number!")
else:
    print("Unlucky.")