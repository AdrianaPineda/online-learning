#!/usr/bin/python3
# regex.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Gorup, LLC

import re

# Regular expressions are implemented in Python with the "re" module ^

def main():
    fh = open('raven.txt')
    for line in fh:
        match = re.search('(Len|Neverm)ore', line)
        sub = re.sub('(Len|Neverm)ore', "###", line) # sub > search and replace
        if match:
            print(line, end='')
            print(match.group())
            print(sub)
            print(line.replace(match.group(), '###'), end='')

if __name__ == "__main__": main()
