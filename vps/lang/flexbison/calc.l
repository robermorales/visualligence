%{
#include "calc.tab.h"
#include <stdio.h>
%}

%%

[0-9]+	{ yylval = atoi( yytext ); return NUM ; }
"+"		{ return '+' ; }
"-"		{ return '-' ; }
"*"		{ return '*' ; }
"/"		{ return '/' ; }
"\n"	{ return '\n'; }

%%

