import turtle, math


class Circle():
    def __init__(self, radius, diameter):
        self.radius = radius
        self.diameter = diameter

    @classmethod
    def from_radius(cls, radius):
        return cls(radius=radius, diameter=radius * 2)

    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius=diameter / 2, diameter=diameter)

    def radius_please(self):
        return f"The radius is {self.radius}"

    def diameter_please(self):
        return f"The diameter is {self.diameter}"

    def area(self):
        area = math.pi * (self.radius) ** 2
        return area

    def __str__(self):
        return f"The radius is {self.radius} and the diameter is {self.diameter}!"

    def __add__(self, other):
        new_radius = self.radius + other.radius
        new_diameter = self.diameter + other.diameter
        return Circle(new_radius, new_diameter)
    
    def __gt__(self,other):
        return self.radius > other.radius
            
    def __eq__(self,other):
        return self.radius == other.radius
    
    def __repr__(self):
        return f"Circle with radius {self.radius}"
    
    
    
   
        
    
c1 = Circle.from_diameter(8)
print(str(c1))

c2 = Circle.from_radius(3)
print(str(c2))

c3 = c1+c2
print(str(c3))
print(c2>c1)

circlelist = [c1,c2,c3]

circlelist.sort(key=lambda x: x.radius)

print(circlelist)