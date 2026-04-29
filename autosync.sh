#!/bin/bash
cd /home/nightwing/Desktop/enkss-site || exit

while true; do
    inotifywait -r -e modify,create,delete,move . >/dev/null 2>&1
    sleep 2

    git add .

    if ! git diff --cached --quiet; then
        git commit -m "Update $(date '+%Y-%m-%d %H:%M')" >/dev/null 2>&1
        git push origin main >/dev/null 2>&1
    fi
done
