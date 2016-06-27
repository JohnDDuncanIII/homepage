#!/bin/sh
# Simple script to publish blogs
# Example usage: ./publish.sh "Header Title" inputFile.txt
# Created by John D. Duncan, III
COUNTER_FILE="counter.txt";
count=`cat $COUNTER_FILE`; # get the post number
FILENAME="$count`echo _$1 | awk '{print $1;}'| tr '[:upper:]' '[:lower:]'`"; # make filename post #, then first word of the title
FILENAME="$FILENAME.html";
echo "$FILENAME";

INFILE=$(sed -re '
s/$/<br>/; # replace newline with <br>
s/\t/\&emsp;\&emsp;\&emsp;/g; 
s/&/\\&/g; # ampersand fixes
s/>>(.*)\.<br>/<\/p><blockquote>\1\. <\/blockquote><p>/g;  # replace > .* \.<br> with blockquote
s/\*\*([a-zA-Z0-9[:space:]_]*)\*\*/<b>\1<\/b>/g;  # replace ** with <b>
s/\~\~([a-zA-Z0-9[:space:]_]*)\~\~/<s>\1<\/s>/g;  # replace ~~ with <s>
s/```(.*)```/<code>\1<\/code>/g;  # replace ``` with <code>
s/---/<\/p><hr><p>/g;  # replace --- with <hr>
s/\_\_([a-zA-Z0-9[:space:]_]*)\_\_/<small>\1<\/small>/g;  # replace __ with <small>
s/\#\#([a-zA-Z0-9[:space:]_]*)\#\#/<u>\1<\/u>/g;  # replace __ with <u>
s/\%\%(.*)\%\%/<mark>\1<\/mark>/g;  # replace %% with <mark>
s/\_\{([a-zA-Z0-9[:space:]_,]*)\}/<sub>\1<\/sub>/g;  # replace _{} with <sub>
s/\^\{([a-zA-Z0-9[:space:]_,]*)\}/<sup>\1<\/sup>/g;  # replace ^{} with <sup>
s/\_([a-zA-Z0-9[:space:]_]*)\_/<i>\1<\/i>/g; # replace _ with <i>
s/\!\[(.*)\]\((.*)\)/<img src=\2 alt=\1>/g;  # markdown url (force unwrap image)
s/\[(.*)\]\((.*)\)/<a href=\2>\1<\/a>/g;  # markdown url
s/\[(.*)\]<([a-zA-Z0-9[:space:]_,]*)>/<abbr title="\2">\1<\/abbr>/g;  # replace []<> with <abbr>
s|[[:space:]](http[:]//[^ ]*[a-zA-Z])[[:space:]]| <a href=\"\1\">\1</a> |g; # replace urls with html urls
s|\w+@\w+\.\w+(\.\w+)?|<a href=\"mailto:\0\">\0</a>|g;s/\//\\\//g' $2); # replace tab with &emsp;

sed "s/\(<h1>\)/\1$1/; # add header title
s/\(<time>\)/\1$(date +'%A, %B %d %Y - %I:%M:%S %p')/ # add date to footer
s/\(<p>\)/\1$(echo $INFILE)/" template.html > $FILENAME; # add it all back into the new document
sed -i 's/<br>/<br>\n/g' $FILENAME; # physically break newlines to easily match tables
sed -i 's/|\([a-zA-Z0-9[:space:]_,$\*\/<>-]*\)*/<td>\1<\/td>/g; s/<td><br><\/td>/<br>/g;s/\(<td>.*<\/td>\)<br>/<tr>\1<\/tr>/g' $FILENAME; # match markdown-extended formatted tables: | col 1 | col 2 | etc... |
sed -n '1h; 1!H; ${g; s/\(<tr>.*<\/tr>\)/<\/p><table>\0<\/table><p>/g p}' $FILENAME > $FILENAME.tmp && mv $FILENAME.tmp $FILENAME; # insert the table tags around the entire inserted table block -- see http://www.refining-linux.org/archives/27/20-Multi-line-sed-search-and-replace/ for explanation
emacs -batch $FILENAME --eval '(indent-region (point-min) (point-max) nil)' -f save-buffer # LISP to properly indent the inserted HTML
rm $FILENAME~;
chmod 644 $FILENAME; # make readable
echo $((count+1)) > $COUNTER_FILE; # write this out to the file

TABLEROW=$(echo "<TR>?<TD><a href="$FILENAME">$1<\/a><\/TD>?<TD>$(date +"%A, %B %d %Y - %I:%M:%S %p")<\/TD>?<\/TR>" | sed -e $'s/?/\\\n/g'); # add the post to the index's table
sed -i "s/<time>\(.*\)<\/time>/<time>Modified: $(date +'%A, %B %d %Y - %I:%M:%S %p')<\/time>/;/\(<table\)/a $TABLEROW" index.html; # update timestamp
