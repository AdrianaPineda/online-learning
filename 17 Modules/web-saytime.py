#!/usr/bin/env python3
# datetime.py by Bill Weinman <http://bw.org/contact/>
# Copyright (c) 2010 The BearHeart Group, LLC
# CGI/SSI version for bw.org
#

import time, saytime # module

t = time.localtime()
print("Content-type: text/html\n")
print(
    "In Phoenix, Arizona, it is now " +
    saytime.saytime_t(t).words() +
    time.strftime(', on %A, %d %B %Y.')
)

# When you want to reuse code, put it in a module
# Creating a module is like creating a script, we need to be careful and not
# have any code that is outside of a class or function and have this pattern
# `if __name__ == "__main__": main()` at the bottom (to run main when its
# imported)
