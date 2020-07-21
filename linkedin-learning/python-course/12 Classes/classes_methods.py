#!/usr/bin/python3
# classes.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

class Duck:
    def __init__(self, value):
        print('Constructor')
        self._v = value

    def quack(self): # self is a reference to the object
        print('Quaaack!', self._v)

    def walk(self):
        print('Walks like a duck.', self._v)

def main():
    donald = Duck(45)
    donald.quack()
    donald.walk()

if __name__ == "__main__": main()
