#!/usr/bin/python3
# containers.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    file_in = open('utf8.txt', 'r', encoding = 'utf_8') # r > read
    file_out = open('utf8.html', 'w')
    outbytes = bytearray() # mutable list of bytes
    for line in file_in:
        for char in line:
            if ord(char) > 127: # `ord` integer equivalent of that char
                # out of normal ascii range
                outbytes += bytes('&#{:04d};'.format(ord(c)), encoding = 'utf8')
                # immutable arrays of bytes
                pass
            else:
                outbytes.append(ord(c))

    outstring = str(outbytes, encoding = 'utf8')
    print(outstring, file = file_out)
    print(outstring)
    print('Done')



# Bytes and byte arrays are like tuples and lists. But instead of containing
# arbitrary data, they containt bytes (8-bit words of data)
# Often used for converting string

if __name__ == "__main__": main()
