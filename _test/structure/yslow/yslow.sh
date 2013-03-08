#!/bin/sh
clear


### FUNCTION FOR CHECKING SUCCESS/FAILURE CODE
function checkError {
    if [[ $1 != 0 ]] ; then
        #prevent commit with error code
        echo "ERROR"
        exit 99
    fi
}


phantomjs yslow.js --info basic http://localhost:8000
checkError $?


### Exit successfully
exit 0