# #Exercise 1 - Cats

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age


# cat1 = Cat("Chatul", 3)
# cat2 = Cat("Fluffy", 7)
# cat3 = Cat("Tiger", 5)


# def oldest_cat(*args):
#     old_name = ""
#     old_age = 0

#     for arg in args:
#         if arg.age > old_age:
#             old_age = arg.age
#             old_name = arg.nameclink
#     return old_name, old_age

# print(oldest_cat(cat1,cat2,cat3)[0])
# print(oldest_cat(cat1,cat2,cat3)[-1])

# print(f"The oldest cat is {oldest_cat(cat1,cat2,cat3)[0]} and he is {oldest_cat(cat1,cat2,cat3)[-1]} years old.")

# # Exercise 2 - Dogs


# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         print(f"{self.name} jumps {self.height*2} cm high!")

# davids_dog = Dog("Rex",50)

# print(davids_dog.name)
# print(davids_dog.height)
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup",20)

# print(sarahs_dog.height)
# print(sarahs_dog.name)
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print(davids_dog.name)
# elif sarahs_dog.height > davids_dog.height:
#     print(sarahs_dog.name)

# #Exercise 3
# class Song():
#     def __init__ (self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for l in self.lyrics:
#             print(l)

# anthem = Song([
#     "The birds they sang at the break of day",
#     "Start again, I heard them say",
#     "Don't dwell on what has passed away",
#     "Or what is yet to be"
# ])

# anthem.sing_me_a_song()

# # Exercise 4


# class Zoo:
#     def __init__(self, zoo_name):
#         self.animals = []
#         self.name = zoo_name

#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)

#     def get_animals(self):
#         print(self.animals)

#     def sell_animals(self, animal_sold):
#         self.animal_sold = animal_sold
#         if self.animal_sold in self.animals:
#             self.animals.remove(self.animal_sold)
#         print(f"{animal_sold} has been sold")

#     def sort_animals(self):
#         animal_alpha = sorted(self.animals)
#         animal_groups = [[animal_alpha[0]]]

#         for a in animal_alpha:
#             if animal_groups[-1][0][0] == a[0]:
#                 animal_groups[-1].append(a)
#             else:
#                 animal_groups.append([a])
#         animal_groups[0].pop(0)
#         # print(animal_groups)

#         for i in range(len(animal_groups)):
#             if len(animal_groups[i]) == 1:
#                 unit = animal_groups[i][0]
#                 animal_groups[i] = unit

#         animal_dict = {}

#         for i, j in enumerate(animal_groups, start=1):
#             animal_dict[i] = j

#         return animal_dict

#     def get_groups(self):
#         for key, value in self.sort_animals().items():
#             print(value)


# ramat_gan_safari = Zoo("Ramat Gan Safari")
# ramat_gan_safari.add_animal("Emu")
# ramat_gan_safari.add_animal("Aardvark")
# ramat_gan_safari.add_animal("Yak")
# ramat_gan_safari.add_animal("Cheetah")
# ramat_gan_safari.add_animal("Antlion")
# ramat_gan_safari.add_animal("Antelope")
# ramat_gan_safari.add_animal("Crab")
# ramat_gan_safari.add_animal("Elephant")
# ramat_gan_safari.add_animal("Gnu")
# ramat_gan_safari.sell_animals("Yak")

# ramat_gan_safari.get_animals()
# ramat_gan_safari.sort_animals()
# ramat_gan_safari.get_groups()
