#!/usr/bin/python3
# ops.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    print("This is the ops.py file.")

    print(0b0101) # Number 5, is printed as decimal
    b(5)


# Prints the binary
def b(n):
    print('{:08b}'.format(n))

if __name__ == "__main__": main()
