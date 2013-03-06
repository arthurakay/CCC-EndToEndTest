#!/bin/sh
clear


### FUNCTION FOR CHECKING SUCCESS/FAILURE CODE
function checkError {
    if [[ $1 != 0 ]] ; then
        #prevent commit with error code
        exit 99
    fi
}


### START LOCAL SERVER
node ../../../scripts/web-server.js &
pid1=$(echo $!)


### START YSLOW SERVER
node yslow-server.js &
pid2=$(echo $!)


### RUN WEBSITE AGAINST YSLOW, GET RESULTS
phantomjs phantom-netsniff.js http://localhost:8000


### DON'T LEAVE RUNNING PROCESSES!
kill -9 ${pid1}
kill -9 ${pid2}


checkError $?


### Exit successfully
exit 0