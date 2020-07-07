#!/usr/bin/python3
# functions.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    testfunc()
    funcWithArguments(1, 2)

def testfunc():
    print('This is a test function')

def functionDoesNothing():
    pass # Content that doesn't do anything

def funcWithArguments(arg1, arg2=10, arg3=20, arg4=None): #function with default values for arguments
    print('numbers', arg1, arg2, arg3)
    if arg4 is None:
        print('Arg 4 is None')
        # None is a singleton object


if __name__ == "__main__": main()
