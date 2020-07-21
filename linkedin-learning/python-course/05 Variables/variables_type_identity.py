#!/usr/bin/python3
# variables.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

# Dictionaries: are mutable objects

def main():
    x = 42
    y = 42

    # Numbers are immutable, their ids are equal

    print(x == y) # True. Compares values
    print(x is y) # True. Compares identity.


    dict1 = dict(x = 42)
    dict2 = dict(x = 42)
    # Dictionaries are Mutable, their ids are different

    print(x == y) # True. Compares values
    print(x is y) # False. Compares identity.

if __name__ == "__main__": main()
