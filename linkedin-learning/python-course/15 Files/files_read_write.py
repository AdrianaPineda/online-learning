#!/usr/bin/python3
# files.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    infile = open('lines.txt', 'r')
    outfile = open('new_lines.txt', 'w')
    for line in infile:
        print(line, file = outfile, end = '')
    print('Done.')

    buffersize = 50000
    big_infile = open('bigfile.txt', 'r')
    big_outfile = open('bigile_new_lines.txt', 'w')
    buffer = big_infile.read(buffersize)
    while len(buffer):
        big_outfile.write(buffer)
        print('.', end = '')
        buffer = big_infile.read(buffersize) # we didn't use a for, because read is not iterable
    print()
    print('Done')
    
if __name__ == "__main__": main()
