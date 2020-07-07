#!/usr/bin/python3
# syntax.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

class Egg:

    # all methods within classes have `self` as argument (not required to be called self)
    def __init__(self, kind = "fried"):
        self.kind = kind

    def whatKind(self):
        return self.kind



def main():
    friedEgg = Egg()
    boiledEgg = Egg(kind = "boiled")

    print(friedEgg.whatKind())
    print(boiledEgg.whatKind())


if __name__ == "__main__": main() # to define functions after they are called
