#!/usr/bin/python3
# syntax.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    a = "one" # defines variable a, creates the object of the appropiate type (if it hasn't been
    # created), and assings "one" to it
    #everything in python is an object of a class
    print(type(a), a)

    b = (1, 2, 3, 4) #tuple
    print(b)

    # conditional executions: if, elif, else
    # conditional values/expression: ``"less than" if e < f else "not less"``,
    #  like a ? b : c for other languages (terniary operator in Swift)

    c, d = 0, 1
    if c < d:
        print("c is less than d") # this is a sweet of code (a block in python)
    elif c > d:
        print("c is greater than d")
    else:
        print("c is equal to d")

    e, f = 0, 1
    s = "less than" if e < f else "not less"
    print(s)

    func()

def func(a=1): # def is the keyword for the function
               # default argument
    for i in range(10):
        print(i, end=' ') # this is a sweet of code (a block in python)
    print()

if __name__ == "__main__": main() # to define functions after they are called
