# import string, random, datetime
# from faker import Faker

# fake = Faker()

from typing import Union

# # Exercise 1 - Currencies


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{str(self.amount)} {self.currency}s"

    def __int__(self):
        return float(self.amount)

    def __repr__(self):
        return str(c1)

    def __add__(self, other):

        if type(other) == int:
            return self.amount + other
        elif type(other) == Currency:
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            else:
                return self.amount + other.amount

    def __iadd__(self, other):
        if type(other) == int:
            self.amount += other
            return self
        elif type(other) == Currency:
            self.amount += other.amount
            return self


c1 = Currency("dollar", 5.5)
c2 = Currency("dollar", 10)
c3 = Currency("shekel", 1)
c4 = Currency("shekel", 10)

print(str(c1))
print(int(c1))
print(repr(c1))


print(c1 + 5)
print(c1 + c2)

print(c1)

c1 += 5
print(c1)
c1 += c2
print(c1)

print(c1 + c3)

# # Exercise 3 - String Module
# ex_string = string.ascii_lowercase + string.ascii_uppercase

# random_list = []
# counter = 0
# while counter < 5:
#     # random_string.join(ex_string[random.randint(0,52)])
#     i = random.randint(0, 52)
#     random_list.append(ex_string[i])


#     counter += 1

# answer = "".join(random_list)
# print(answer)

# #Exercise 4
# def todays_date():
#     print(datetime.date.today())

# todays_date()

# #Exercise 5

# now = datetime.datetime.now()
# jan1 = datetime.datetime(2025,1,1)

# timediff = jan1 - now
# print(timediff)

# #Exercise 6 - Birthday and minutes

# birthday = input("Please enter your birthday in the form yyyy,mm,dd")

# now = datetime.datetime.now()

# print(now - birthday)

# #Exercise 7 - Faker Module

# users = []

# def fake_list_import(number):
#     for i in range(number):
#         thisdict = {}
#         thisdict.update({"name":fake.name(),"address":fake.address(), "language_code":fake.language_code()})
#         users.append(thisdict)
# fake_list_import(3)
# print(users)
