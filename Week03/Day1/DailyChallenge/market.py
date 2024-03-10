class Farm:
    def __init__ (self, name):
        self.name = name
        self.stock = {}

    def add_animal(self, animal:str, quantity:int = 1):
        if animal in self.stock:
            self.stock[animal] += quantity
        
        else:
            self.stock[animal] = quantity

    def get_info(self):
        
        print(f"{self.name}'s Farm\n")
        
        for key,value in self.stock.items():
           print(f"{key} : {value}\n")
           
        return "     E-I-E-I-O!"   
        # make_string = self.name + "'s farm \n \n" + {key}":"{value} for key,value in self.stock.items()
        
        
        # print(f"{self.name}s farm \n \n")
        # for key,value in self.stock.items():
        #     print(key, ":", value)
    
macdonald = Farm("McDonald")
macdonald.add_animal("cow",5)
macdonald.add_animal("sheep")
macdonald.add_animal("sheep")
macdonald.add_animal("goat",12)
print(macdonald.get_info())
    