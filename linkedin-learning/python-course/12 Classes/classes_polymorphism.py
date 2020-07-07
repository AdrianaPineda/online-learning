#!/usr/bin/python3
# classes.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

class Duck:
    def quack(self):
        print('Quaaack!')

    def walk(self):
        print('Walks like a duck.')

    def bark(self):
        print('The duck cannot bark')

    def fur(self):
        print('The duck has feathers')

class Dog:
    def bark(self):
        print('Woof!')

    def fur(self):
        print('The dog has brown and white fur')

    def quack(self):
        print('The dog cannot quack')

    def walk(self):
        print('Walks like a dog.')

def in_the_forest(dog): # param can be named whatever I want, no type implied
    dog.bark()
    dog.fur()

def in_the_pond(duck):
    duck.quack()
    duck.walk()

def main():
    donald = Duck()
    donald.quack()
    donald.walk()

    fido = Dog()
    fido.bark()
    fido.fur()

    print('***')
    for o in (donald, fido):
        o.quack()
        o.walk()
        o.bark()
        o.fur()

    print('***')

    in_the_forest(donald) # expecting dog
    in_the_pond(fido)     # expecting duck

if __name__ == "__main__": main()

# Polymorphism: is the practice of using one object of one particular class
# as if it were another object of another class

# Objects in python don't care what the name of the class is;
# Python is loosely type, duck typing > therefore Polymorphism is natural
