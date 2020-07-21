#!/usr/bin/python3
# classes.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

class Animal:
    def talk(self):
        print('I have something to say')

    def walk(self):
        print('I''m walkin'' here')

    def clothes(self):
        print('I have nice clothes')

class Duck(Animal):
    def quack(self):
        print('Quaaack!')

    def walk(self):
        super().walk()
        print('Walks like a duck.')

class Dog(Animal):
    pass

def main():
    donald = Duck()
    donald.quack()
    donald.walk()
    donald.clothes()

    fido = Dog()
    fido.walk()

if __name__ == "__main__": main()
