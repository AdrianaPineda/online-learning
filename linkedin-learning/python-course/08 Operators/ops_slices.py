#!/usr/bin/python3
# ops.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    print("This is the ops.py file.")
    list = [1,2,3,4,5,6,7,8,9,10]
    slice = list[0:5] #5th position not included
    print(slice)

    # Ranges in python are not inclusive
    zero_to_nine_range = range(0,10)
    for i in zero_to_nine_range: print(i)

    list[:] = range(100)
    slice_2 = list[27:42:3] # gives every 3rd element
    print(slice_2)

    # Assign to a slice
    list[27:43:3] = (99,99,99,99,99,99)
    print(list)

if __name__ == "__main__": main()
