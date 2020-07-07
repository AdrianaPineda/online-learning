#!/usr/bin/python3
# break.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    s = 'this is a string'

    # For
    for c in s:
        if c == 's': continue
        #if c == 's': break
        print(c, end='')
    else: # when there is no more chars to itereate. When the condition is false
        print('else')


    # while
    i = 0
    while(i < len(s)):
        print(s[i], end='')
        i += 1
    else: # when there is no more chars to itereate
    print('else')

if __name__ == "__main__": main()
