#!/usr/bin/python3
# classes.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

class Duck:
    #def __init__(self, color = 'white'): # this does not scale properly
    #    self._color = color
    def __init__(self, **kwargs):
        self._color = kwargs.get('color', 'white')
        self._variables = kwargs # another way to make this scale properly?
        # Common in python to store object data in dictionaries

    def quack(self):
        print('Quaaack!')

    def walk(self):
        print('Walks like a duck.')

    def set_color(self, color):
        self._color = color

    def get_color(self):
        return self._color
        # self._variables.get('color', 'white')

    def set_variable(self, k, v):
        self._variables[k] = v

    def get_variable(self, k):
        return self._variables.get(k, None)

def main():
    donald = Duck(color = 'red', feet = 2)
    print(donald.get_color())
    donald.set_color('blue')
    print(donald.get_color())
    donald.quack()
    donald.walk()

if __name__ == "__main__": main()

# Object data is data that is carried around with the object
