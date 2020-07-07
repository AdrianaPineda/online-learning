#!/usr/bin/python3
# classes.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

class inclusive_range:
    def __init__(self, *args):
        num_args = len(args)
        if num_args < 1:
            raise TypeError('Requires at least 1 argument')
        elif num_args == 1:
            self.stop = args[0]
            self.start = 0
            self.step = 1
        elif num_args == 2:
            (self.start, self.stop) = args
            self.step = 1
        elif num_args == 3:
            (self.start, self.stop, self.step) = args
        else:
            raise TypeError('inclusive_range expected at most 3 arguments, got {}'.format(num_args))

    def __iter__(self): # The __iter__ makes the object an iterable object
        i = self.start
        while i <= self.stop:
            yield i # yield turns the function into a generator
            i += self.step

def main():
    o = inclusive_range(25)
    for i in o: print(i, end = ' ')
    print('')
if __name__ == "__main__": main()
