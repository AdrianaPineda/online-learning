# Command line

~: home directory

/: root directory

https://help.ubuntu.com/community/UsingTheTerminal

## ls

* -h: human readable
* -a: hidden files
* -l: list

## tail

* -f: output appended data as the file grows

## multiple commands

<command_1>;<command_2>

Example: `php test.php 2 ; echo "helo" ; php test.php 4`

## Other commands

* wc (word count): newline, word, and byte counts for each file
    > wc -l: print the newline counts
* more: paginated
* "> [file]":  puts results into file
* `> [file]`: puts result into file, if the file does not exist it creates it, if it does exist it will override it
* `>> [file]`: appends lines to file and does not override the file
* `<` imports file content
    > `mysql -u root -p < all_schema.sql`: sends contents of all_schema.sql into mysql
* whoami

## Streams
<command> [STDIN: standard input] > [STDOUT: standard output] 2>[STDERR: standard error]

Example:

> `php 1-streams.php 3 > salidayerror.txt 2>&1 &`

`2>&1`: puts STDOUT and STDERR in the same file

`&`: at the end, it means the process is run in the background  

## Processes
* top: see processes currently running (interactive)
* kill -9 <process_id>: kill process
* uptime: time
* time: processor time
* date: returns the current date

    Example: check how much time a commands lasts:
    > `date; [command]; date`
* ps -wA: see processes currently executing and where they come from

    >  `ps -wA | wc -l: word count (-l: how many lines)`

    > `ps -wA | grep ttys001: searches `ttys001` in each line`
* ps aux: see processes currently executing with more info than -wA

## Power Tools

### grep
Looks for characters inside files
* -r: recursively
* -e: expression
* -n: line number of character inside file
* -i: case insensitive
* -v: does not contain that string

Example:
> `grep -r [directory_to_search_in] -e [text]`

* `grep -r  . -e beco`: looks for "beco" in the current directory
* `grep -r  files -e while`: looks for "while" in the "files" directory
* `grep peliculas.csv -e Comedy | wc -l`: looks for "Comedy" in "peliculas.csv"file with word count. Returns the number of lines in which "Comedy" was found

### find
Looks in files metadata (for example file names and types)

* -name: file name
* -type: file type: 
    > f, file: file

    > d: directory

Example
> `find [directory_to_search_in] -name *.php -type f | wc -l`

> `find [directory_to_search_in] -name *.php | more`

> `find [directory_to_search_in] -name *.php -type f > results`

Another option is with `ls`
> `ls -lh *jpg`: lists what is in the current directory

### curl
Emulates a browser

> `curl [url]`

> `curl [url] > [file]`: downloads contents to file

> `curl [url] -o [file]`: downloads contents to file (-o denotes the file name)

### zip
Compresses files

> `zip [zip_file_name] *csv`

> `unzip -vl [zip_file_name]`: brings info of zip file

### tar
This command joins several files to be compressed, and then we tell it which compression algorithm to use (for example gzip).

* cfz: compress file with zip
* xfz: extract file with zip

> `tar cfz [tar_file_name].tar.gz *csv`

> `tar xfz [tar_file_name].tar.gz `

### awk
Finds and Replaces text, database sort/validate/index
> `cat [file] | awk -F "::" '{printf("%s\n", $2)}' | more`

> `cat [file] | awk -F "::" '{printf("%s - %s\n", $3, $2)}' | more`

* %s: string
* -F: separates by * column

In this example, awk helps see the `cat`command results with a text pattern

## Pipe `|`
The standard output of the first command is sent to the standard input of the second command

> `caat movies.dat | grep Thriller | awk -F"::" ‘{printf("%s\n", $3)}’ | grep -v Comedy | grep -i Eye`

The difference between pipe `|` and `>/<` is that the latter works only for files:
> `mysql -u root < all_schema.sql` == `cat all_schema.sql | mysql -u root`

## Crontab
It is only executed if the computer is turned on. The user doesn't need to be logged in 

`crontab - e`: edit crontab
`crontab - l`: which crontab I have installed

* Column 1: minute 0-59
* Column 2: hour 0-23
* Column 3: day of month 1-31
* Column 4: month 1-12
* Column 5: day of week 0-7 (0 and 7 > sunday)
* Column 6: script or command to execute

If no number is provided, but instead `*` it means every minute/hour/day/etc

Examples:

* We can provide several values: `1,10,18` (no spaces)
* Every 5 minutes: `*/5`
* First 10 minutes of an hour: `1-10`
* Every day at 3am:  `0 4 * * * script.sh`, do not put `*` for minute cause it will trigger it every minute

https://crontab.guru/

## Links

### Disk usage
`du` disk usage of files inside a directory

* -h
* -d [number] deepness. How deep the command checks

### Symbolic links
`ln -s [directory_path] [alias]` creates the alias ponting to a directory (direct access)

* -s: symbolic link

When removing a symbolic link alias, the original file is not touched

## Users and permissions

Example: 
`-rw-r--r--`
* `-` dir/link/file
* `rw-` owner (read and write access)
* `r--` group (read access)
* `r--` anyone (read access)

```
r: read
w: write
x: execute
```

Permissions -> numeric value

```
rwx : 421
r: 4
w: 2
x: 1

—-- : 0
r-- : 4
rw- : 6
r-x : 5
-–x : 1
-wx : 3
rwx : 7
-w- : 2

Samples:
666: rw-rw-rw-
750: rwxr-x---
740: rwxr-----
```

Change permissions to a certain file:
>`chmod 750 file.txt`

# References
https://static.platzi.com/media/public/uploads/lista-de-comandos-mas-usados_782ad6ee-ab25-4032-bc58-38b852919f76.pdf