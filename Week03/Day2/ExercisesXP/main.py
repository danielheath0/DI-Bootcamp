# #Exercise 1: Pets
# class Pets:
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())


# class Cat:
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f"{self.name} is just walking around"


# class Bengal(Cat):
#     def sing(self, sounds):
#         return f"{sounds}"


# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f"{sounds}"

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f"{sounds}"

# ben = Bengal("Ben", 4)
# charlie = Chartreux("Charlie",6)
# sam = Siamese("Sam", 2)

# all_cats = [ben, charlie, sam]
# print(all_cats)

# sara_pets = Pets(all_cats)
# sara_pets.walk()


# # Exercise 2 - Dogs
# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f"{self.name} is barking"

#     def run_speed(self):
#         return self.weight / self.age * 10

#     def fight(self, other_dog):

#         if self.run_speed() * self.weight > other_dog.run_speed() * self.weight:
#             winner = self.name

#         elif self.run_speed() * self.weight < other_dog.run_speed() * self.weight:
#             winner = other_dog.name

#         print(f"{winner} is the winner!")

# spike = Dog("Spike",3,30)
# killer = Dog("Killer", 5, 35)
# bullseye = Dog("Bullseye", 2, 40)

# spike.fight(killer)

#Exercise 3
#See newfile.py

#Exercise 4

class Family():
    def __init__ (self, members, last_name):
        self.members = members
        self.last_name = last_name
    
    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulations!")
    
    def is_18(self, name):
        for d in self.members:
            if d["name"] == name:
                if d["age"] >= 18:
                    return True
                else:
                    return False 
                
    def family_presentation(self):
        print(f"Here is the {self.last_name} family! Members include:")
        for d in self.members:
            print(f"{d["name"]} who is a {d["age"]}-year-old ", end = "")
            if d["gender"] == "Female" and vaish.is_18(d["name"]) is False:
                print("girl")
            elif d["gender"] == "Male" and vaish.is_18(d["name"]) is False:
                print("boy")    
            elif d["gender"] == "Female" and vaish.is_18(d["name"]) is True:
                print("woman")    
            elif d["gender"] == "Male" and vaish.is_18(d["name"]) is True:
                print("man")    
        
        # print(f"{self.last_name}, {self.members}")
        
vaish = Family([
    {
        "name":"Yarden",
        "age" : 39,
        "gender" : "Female",
        "is_child": False
     },
    {
        "name":"Mayan",
        "age" : 44,
        "gender" : "Female",
        "is_child": False
     },
    {
        "name":"Tamar",
        "age" : 14,
        "gender" : "Female",
        "is_child": True
     },
    {
        "name":"Gaya",
        "age" : 12,
        "gender" : "Female",
        "is_child": True
     },
    {
        "name":"Daniel",
        "age" : 37,
        "gender" : "Male",
        "is_child": False
     }
    
], "Vaish")

# vaish.born(name="Ktsitsa",age=0,gender="Female",is_child=True)

# print(vaish.is_18("Daniel"))

# vaish.family_presentation()

# #Exercise 5 - TheIncredibles Family

# class TheIncredibles(Family):
#     def __init__(self, members, last_name):
#         super().__init__(members,last_name)
        
#     def use_power(self, name):
#         for d in self.members:
#             if d["name"] == name:
#                 if self.is_18(name) is False:
#                     raise Exception("You must be 18 to use powers!")
#                 elif self.is_18(name):
#                     print(f"{d["name"]} used {d["power"]}")
                    
#     def incredible_presentation(self):
#         super().family_presentation(self)

# incredibles = TheIncredibles([
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ], "Incredibles")

# incredibles.born(name="Baby Jack",age=0,gender="Male",is_child=True,power="Unknown" )

# incredibles.use_power("Michael")
# incredibles.use_power("Sarah")
# incredibles.use_power("Baby Jack")