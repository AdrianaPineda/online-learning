#!/usr/bin/python3

# A generator function creates an iterator

def isprime(n):
    if n == 1:
        return False
    for x in range(2, n):
        if n % x == 0:
            return False
    else:
        return True

def primes(n = 1):
   while(True):
       if isprime(n): yield n
       #yield is like a return, it returns but when the function is called again,
       #it continues after the yield
       #it returns an iterator object > useful for for loops
       n += 1

for n in primes(): #uses the generator function as an iterator
    if n > 100: break
    print(n)
