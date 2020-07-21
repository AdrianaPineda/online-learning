#!/usr/bin/python3
# classes.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

class Duck:
    def __init__(self, **kwargs):
        self.properties = kwargs

    def quack(self):
        print('Quaaack!')

    def walk(self):
        print('Walks like a duck.')

    def get_properties(self):
        return self.properties

    def get_property(self, key):
        return self.properties.get(key, None)

    @property # decorator function > this makes this function an accesor method
    def color(self):
        return self.properties.get('color', None)

    @color.setter
    def color(self, c):
        self.properties['color'] = c

    @color.deleter
    def color(self):
        del self.properties['color']

def main():
    donald = Duck(color = 'blue')
    print(donald.get_property('color'))

    another_donald = Duck()
    another_donald.color = 'red' # Im not calling them as functions but as properties
    print(another_donald.color)

if __name__ == "__main__": main()

# Decorators are special functions that return other functions, and they are used
# to modify the way that a function works
