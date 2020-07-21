#!/usr/bin/python3
# functions.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    testfunc(1, 2, 3, 4, 5, six = 6, seven = 7)
    # Keys of the keyword arguments are not known to the receiver. Since they
    # are a dictionary, the order in which they are sent is not the same in which
    # they are received.
    # Tuple args are received in the same order

def testfunc(arg1, arg2, *args3, **kwargs4): #kwargs > key word args. Dictionaries
    print('Args', kwargs4)
    # Order matters, first normal args, default args(*) and then keyword args(**)

if __name__ == "__main__": main()
