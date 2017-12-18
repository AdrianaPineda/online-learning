#!/usr/bin/python3
# strings.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    s = 'this is a string'
    print(s.capitalize())
    print(s.title())
    print(s.upper())
    print(s.swapcase())
    print(s.find('is'))
    print(s.replace('this', 'that'))
    print(s.strip())
    print(s.isalnum())
    print(s.isalpha())
    print(s.isdigit())
    print(s.isprintable())

    s = 'This is a string {}, {}'
    id(s)
    new_string = s.format(1, 2)
    id(new_string) # different id, `format` returns a new string

    d = dict(a = 1, b = 2)
    s2 = 'This is a string {a}, {b}'.format(**d)
    print(s2)

    a = 'This is a string'
    b = a.split()
    c = ':'.join(b)

if __name__ == "__main__": main()
