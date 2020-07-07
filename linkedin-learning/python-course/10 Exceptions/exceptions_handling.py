#!/usr/bin/python3
# exceptions.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Gorup, LLC

def main():
    try:
        fh = open('xlines.txt')
    except IOError as e:
        print('Could not open the file: ', e)
    else:
        for line in fh: print(line.strip())


    try:
        for line in readFile('lines.txt2'): print(line.strip())
    except IOError as e:
        print('Could not open the file: ', e)
    except ValueError as e:
        print('Bad filename: ', e)
    else:
        for line in fh: print(line.strip())




def readFile(filename):
    if filename.endswith('.txt'):
        fh = open(filename)
        return fh.readlines()
    else:
        raise ValueError('Filename must end with .txt')


if __name__ == "__main__": main()
