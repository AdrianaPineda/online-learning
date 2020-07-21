#!/usr/bin/python3
# variables.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

# Dictionaries: are mutable objects

def main():
    d1 = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5}
    print(d1)

    for k1 in sorted(d1.keys()):
        print(k1, d1[k1])


    d2 = dict( # no need for quotes in keys
        one = 1,
        two = 2,
        three = 3,
        four = 4,
        five = '5'
    )

    d2['seven'] =7

    print(d2)

if __name__ == "__main__": main()
