#!/usr/bin/python3
# regex.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Gorup, LLC

import re

# Regular expressions are implemented in Python with the "re" module ^

def main():
    fh = open('raven.txt')
    pattern = re.compile('(Len|Neverm)ore') # compiling the regular expression once
    pattern_ignore_case = re.compile('(Len|Neverm)ore', re.IGNORECASE)
    for line in fh:
        if re.search(pattern, line):
            print(line, end='')
            print(pattern.sub('###', line), end='')

if __name__ == "__main__": main()
