#!/bin/bash

fatal() {
    echo "⛔️$*" >&2
    exit 1
}

#arg 1: the command to run, the exit code will be checked
#arg 2: the error message to display if the command failes to return exitcode 0
check_dependency () {
    err_msg="$2"
    test_cmd="$1"
    # echo "Running test command '$test_cmd'"
    eval "$test_cmd 1>/dev/null 2>&1"
    exit_code=$?
    if [[ ! "$exit_code" -eq "0" ]]; then
        echo "⛔️cmd executed: $test_cmd" >&2
        fatal "$err_msg"
    fi
}