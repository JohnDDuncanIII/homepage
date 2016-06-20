#!/bin/sh
# Simple script to publish blogs
# Example usage: ./publish.sh "Header Title" inputFile.txt
# Created by John D. Duncan, III
COUNTER_FILE="counter.txt";
count=`cat $COUNTER_FILE`; # get the number
FILENAME=$count; # first part of the filename is a number that gets incremented each time you post
FILENAME="$FILENAME`echo _$1 | awk '{print $1;}'| tr '[:upper:]' '[:lower:]'`"; # make filename the first word of the title
FILENAME="$FILENAME.html"; # make it an html document
echo "$FILENAME";
sed "s/\(<time>\)/\1$(date +'%A, %B %d %Y - %I:%M:%S %p')/" template.html > $FILENAME ; # add date to the footer
sed -i "s/\(<h1>\)/\1$1/" $FILENAME; # add header title
INFILE="`sed 's/$/<br>/' $2`" # replace newline with <br>
INFILE="$(eval "echo \"$INFILE\"" | sed -e 's/\t/\&emsp;\&emsp;\&emsp;/g')"; # replace tab with &emsp;
INFILE="$(echo "$INFILE" | sed 's/&/\\&/g')"; # ampersand fixes
INFILE=$(echo "$INFILE" | sed "s/>\(.*\)\.<br>/<blockquote>\1\. <\/blockquote>/g"); # replace > .* \.<br> with blockquote
INFILE=$(echo "$INFILE" | sed "s/\*\*\([a-zA-Z0-9[:space:]_]*\)\*\*/<b>\1<\/b>/g"); # replace ** with <b>
INFILE=$(echo "$INFILE" | sed "s/\~\~\([a-zA-Z0-9[:space:]_]*\)\~\~/<s>\1<\/s>/g"); # replace ~~ with <s>
INFILE=$(echo "$INFILE" | sed "s/\_\([a-zA-Z0-9[:space:]_]*\)\_/<i>\1<\/i>/g"); # replace _ with <i>

INFILE="$(echo "$INFILE" | sed -e 's/\!\[\(.*\)\](\(.*\))/<img src=\2 alt=\1>/g')"; # markdown url
INFILE="$(echo "$INFILE" | sed -e 's/\[\(.*\)\](\(.*\))/<a href=\2>\1<\/a>/g')"; # markdown url
INFILE="$(echo "$INFILE" | sed -e "s|[[:space:]]\(http[:]//[^ ]*[a-zA-Z]\)[[:space:]]| <a href=\"\1\">\1</a> |g")"; # replace urls with html urls
INFILE="$(echo "$INFILE" | sed -r "s|\w+@\w+\.\w+(\.\w+)?|<a href=\"mailto:\0\">\0</a>|g")"; # replace email with html mailto link
INFILE="$(echo "$INFILE" | sed 's/\//\\\//g')"; # backslach fixes
sed -i "s/\(<p>\)/\1$(echo $INFILE)/" $FILENAME; # add it all back into the new document
chmod 755 $FILENAME;
count=$((count+1))
echo $count > $COUNTER_FILE;

TABLEROW=$(echo "<TR>?<TD><a href="$FILENAME">$1<\/a><\/TD>?<TD>$(date +"%A, %B %d %Y - %I:%M:%S %p")<\/TD>?<\/TR>" | sed -e $'s/?/\\\n/g'); # add the post to the index's table
sed -i "/\(<table\)/a $TABLEROW" index.html;
sed -i "s/<time>\(.*\)<\/time>/<time>Modified: $(date +'%A, %B %d %Y - %I:%M:%S %p')<\/time>/" index.html; # update timestamp
