import main, random


class PetDog(main.Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print("Bark!")
        if self.trained == False:
            self.trained = True
        elif self.trained == True:
            print(f"{self.name} is already trained!")

    def play(self, *args):
        dog_names = [arg.name for arg in args]
        dog_names.append(self.name)
        print(f"{str([d for d in dog_names])} all play together!")

    def do_a_trick(self):
        tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        if self.trained:
           print(f"{self.name} {random.choice(tricks)}!")
           
jimmy = PetDog("Jimmy", 3, 30, False)
simon = PetDog("Simon", 4, 25, True)
graham = PetDog("Graham", 7, 15, True)

jimmy.train()
simon.train()
graham.train()
jimmy.play(simon, graham)

jimmy.do_a_trick()
graham.do_a_trick()
