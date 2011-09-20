#!/bin/sh

bison -d calc.y
flex calc.l
gcc calc.tab.c lex.yy.c -lfl -o calc

