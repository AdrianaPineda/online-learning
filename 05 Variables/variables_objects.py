#!/usr/bin/python3
# variables.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    print("Main method")

if __name__ == "__main__": main()


# Everything in python is an object
# Every object has an ID, Type and Value
#   - ID: uniquely identifies a particular instance of an object. Cannot change
#         for the life of the object
#   - Type: identifies the class of an object. Cannot change for the life
#           of the object
#   - Value: contents of the object. Mutable objects can change value,
#            immuutable objects cannot
#
# All variables in Python are first class objects
#
# Mutable and immuutable objects:
# Immutable: numbers, strings, tuples are immutable: if we change it, the id is changed, so no value has
#            changed
# Mutable: lists, dictionaries, etc.
