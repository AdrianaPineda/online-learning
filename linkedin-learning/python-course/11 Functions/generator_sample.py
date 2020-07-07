#!/usr/bin/python3
# generator.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    print("This is the functions.py file.")
    for i in inclusive_range(5, 25):
        print(i, end = ' ')
    print('')

def inclusive_range(*args): # non default arg follows default arg
    num_args = len(args)
    if num_args < 1:
        raise TypeError('Requires at leas 1 argument')
    elif num_args == 1:
        start = 0
        step = 1
        stop = args[0]
    elif num_args == 2:
        (start, stop) = args
        step = 1
    elif num_args == 3:
        (start, stop, step) = args
    else:
        raise TypeError('inclusive_range expected at most 3 arguments, got {}'.format(num_args))
    i = start
    while i <= stop:
        yield i # yield turns the function into a generator
        i += step

if __name__ == "__main__": main()

# A generator function is a function that returns an iterator
