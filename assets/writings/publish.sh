#!/bin/sh
# Simple script to publish blogs
COUNTER_FILE="counter.txt";
count=`cat $COUNTER_FILE`;
FILENAME=$count;
FILENAME="$FILENAME`echo _$1 | awk '{print $1;}'| tr '[:upper:]' '[:lower:]'`";
FILENAME="$FILENAME.html";
echo "$FILENAME";
sed "s/\(<time>\)/\1$(date +'%A, %B %d %Y - %I:%M:%S %p')/" template.html > $FILENAME ;
sed -i "s/\(<h1>\)/\1$1/" $FILENAME ;
sed -i "s/\(<p>\)/\1$(cat $2)/" $FILENAME;
chmod 755 $FILENAME;
count=$((count+1))
echo $count > $COUNTER_FILE;
