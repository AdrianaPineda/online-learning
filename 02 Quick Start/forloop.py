#!/usr/bin/python3

# read the lines from the file
fh = open('lines.txt')
for line in fh.readlines():
    print(line, end = "") #by default the print function adds a new line \n
