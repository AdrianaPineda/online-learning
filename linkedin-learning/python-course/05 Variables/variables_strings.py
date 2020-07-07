#!/usr/bin/python3
# variables.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    # Strings are immutable objects
    n = 42
    s1 = 'This is a {} string'.format(n)
    s2 = r'This is a\nstring' # The `r` at the beginning makes the \n a literal
    s3 = '''\
    Text
    line 1
    lines 2''' # to extend a string several lines (triple quotes)
               # if we didn't put the `\` we would get a blank line at the beginning

    s4 = '''
    Text with line at the beginning
    line 1
    lines 2'''

    print(s1)
    print(s2)

if __name__ == "__main__": main()
