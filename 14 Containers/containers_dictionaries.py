#!/usr/bin/python3
# containers.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    d = {'one': 1, 'two': 2, 'three': 3}
    print(d)

    d = dict(one=1, two = 2, three = 3)
    print(d)
    print(type(d))

    x = dict(four = 4, five = 5, six = 6)

    d = dict(one=1, two = 2, three = 3, **x)
    print(d)

    print('four' in x)
    print('three' in x)

    for key in d: print(key) # dictionaries are iterable
    for k,v in d.items(): print(k, v)

    print(d['three'])
    # print(x['three']) # raises an exception
    print(d.get('three'))
    print(x.get('three'))
    print(x.get('three', 'not found'))

    del x['four']
    print(x)
    print(x.pop('five')) # deletes the value and returns it
    print(x)

if __name__ == "__main__": main()
