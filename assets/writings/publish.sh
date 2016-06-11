#!/bin/sh
# Simple script to publish blogs
# Example usage: ./publish.sh "Header Title" inputFile.txt
COUNTER_FILE="counter.txt";
count=`cat $COUNTER_FILE`; # get the number
FILENAME=$count; # first part of the filename is a number that gets incremented each time you post
FILENAME="$FILENAME`echo _$1 | awk '{print $1;}'| tr '[:upper:]' '[:lower:]'`"; # make filename the first word of the title
FILENAME="$FILENAME.html"; # make it an html document
echo "$FILENAME";
sed "s/\(<time>\)/\1$(date +'%A, %B %d %Y - %I:%M:%S %p')/" template.html > $FILENAME ; # add date to the footer
sed -i "s/\(<h1>\)/\1$1/" $FILENAME; # add header title
INFILE="`sed 's/$/<br>/' $2`" # replace newline with <br>
INFILE="$(eval "echo \"$INFILE\"" | sed -e 's/\t/\&emsp;/g')"; # replace tab with &emsp;
INFILE="$(echo "$INFILE" | sed 's/&/\\&/')"; # ampersand fixes
INFILE=$(echo "$INFILE" | sed "s/\*\([a-zA-Z0-9]*\)\*/<b>\1<\/b>/g"); # replace * with <b>
INFILE="$(echo "$INFILE" | sed 's/\//\\\//')"; # backslach fixes
sed -i "s/\(<p>\)/\1$(echo $INFILE)/" $FILENAME;
chmod 755 $FILENAME;
count=$((count+1))
echo $count > $COUNTER_FILE;
