#!/usr/bin/python3
# variables.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    integer_num = 42 # there are 2 types of numbersL integer + float
    float_num = round(42 // 9, 2) # // `integer` division

    integer_num_2 = int(42.9)
    float_num_2 = float(integer_num)

    print(integer_num)
    print(type(integer_num))

if __name__ == "__main__": main()
