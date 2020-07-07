#!/usr/bin/python3
# containers.py by Bill Weinman [http://bw.org/]
# This is an exercise file from Python 3 Essential Training on lynda.com
# Copyright 2010 The BearHeart Group, LLC

def main():
    print('This is the containers.py file.')

    # Tuples (immutable objects)
    tuple_1 = 1,2,3,4,5
    tuple_first_element = tuple_1[0]
    tuple_last_element = tuple_1[-1]
    tuple_length = len(tuple_1)
    tuple_min_value = min(tuple_1)
    tuple_max_value = max(tuple_1)
    print(type(tuple_1))
    #tuple_1[2] = 23 # will generate error, because they are immutable
    print(tuple_1)

    tuple_2 = (1,) # without the comma, it creates an int

    not_a_tuple = (1)

    # Lists (mutable objects)
    list_1 = [1,2,3,4,5]
    list_first_element = list_1[0]
    list_last_element = list_1[-1]
    list_length = len(list_1)
    list_min_value = min(list_1)
    list_max_value = max(list_1)
    print(type(list_1))
    list_1[2] = 9
    print(list_1)


    # Built-in methods
    t = tuple(range(25))
    print(t)
    print(10 in t)
    print(50 in t)
    print(50 not in t)
    for i in t: i # a tuple is iterable
    t.count(5) # counts the number of 5s in the tuple
    t.index(5) # gets the index of the number 5 in the tuple
    # t.append(100) #error > tuples are immutable

    l = list(range(25))
    print(10 in l)
    print(50 in l)
    print(50 not in l)
    for i in l: i # a list is iterable
    l.append(100)
    l.extend(range(20)) # extend is used to append iterable objects
    l.insert(0, 25) # adds to the beginning
    l.insert(12, 120)
    print(l)
    l.remove(12) # looks for the first value of 12 and removes it
    del l[12] # deletes the item at index 12
    l.pop() # removes the value at the end of the list
    l.pop(0) # removes from the beginning
    print(l)

if __name__ == "__main__": main()
