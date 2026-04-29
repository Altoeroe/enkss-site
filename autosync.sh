#!/bin/bash
cd ~/Desktop/enkss-site || exit

while inotifywait -r -e modify,create,delete,move .; do
    git add .
    git commit -m "Auto update $(date '+%Y-%m-%d %H:%M:%S')" 2>/dev/null
    git push
done
