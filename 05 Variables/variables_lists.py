#!/usr/bin/python3
# variables.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    x1 = (1, 2, 3) # Tuple (immutable object)
    print(type(x1), x1)

    x2 = [1, 2, 3] # List (mutable object)
    x2.insert(0, 7)
    x2.insert(1, 4)
    x2.append(5)
    print(x2)

    x3 = 'string' # String (immutable) is a sequence
    print(x3[2]) # get element
    print(x3[2:4]) # get slice (won't return the last element)

    x4 = (1, 2, 3, 4, 5)
    for element in x4:
        print(element)

    x5 = 'string'
    for element in x5:
        print(element)

if __name__ == "__main__": main()
