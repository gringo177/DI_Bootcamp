import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None and diameter is not None:
            raise ValueError("Only one of radius or diameter should be specified.")
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter should be specified.")

    def __str__(self):
        return f"Circle with radius: {self.radius}, diameter: {self.diameter}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def area(self):
        return math.pi * (self.radius ** 2)


circle1 = Circle(radius=3)
circle2 = Circle(diameter=8)
print(circle1)  
print(circle2)  

print("Area of circle1:", circle1.area())  

circle3 = circle1 + circle2
print(circle3)  

print(circle1 < circle2)  
print(circle1 == circle2) 

circles = [circle1, circle2, circle3]
sorted_circles = sorted(circles)
for circle in sorted_circles:
    print(circle)

