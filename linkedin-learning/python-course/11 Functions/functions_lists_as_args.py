#!/usr/bin/python3
# functions.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    testfunc(1, 2, 3, 4)

def testfunc(arg1, arg2, *args): # asterisk > optional args
    print('This is a test function', args)
    for n in args: print(n, end=' ')
    print('\nFinish')


if __name__ == "__main__": main()
