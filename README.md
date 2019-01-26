# Command line

## ls

* -h: human
* -a: hidden files
* -l: list

## tail

* -f: output appended data as the file grows

## multiple commands

<command_1>;<command_2>

Example: `php test.php 2 ; echo "helo" ; php test.php 4`

## Streams
<command> [STDIN: standard input] > [STDOUT: standard output] 2>[STDERR: standard error]

Example:

> `php 1-streams.php 3 > salidayerror.txt 2>&1 &`

`2>&1`: puts STDOUT and STDERR in the same file

`&`: at the end, it means the process is run in the background  

`>>`: file appends lines and does not override the file

## Processes
* top: see processes currently running (interactive)
* kill -9 <process_id>: kill process
* uptime: time
* time: processor time
* date: returns the current date

    Example: check how much time a commands lasts:
    > `date; <command>; date`
* ps -wA: see processes currently executing and where they come from

    >  `ps -wA | wc -l: word count (-l: how many lines)`

    > `ps -wA | grep ttys001: searches `ttys001` in each line`

## Power Tools

## grep
* -r: recursively
* -e: expression

Example:
> `grep -r [directory_to_search_in] -e [text]`

* `grep -r  . -e beco`: looks for "beco" in the current directory
* `grep -r  files -e while`: looks for "while" in the "files" directory