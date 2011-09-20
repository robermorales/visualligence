%{

#include <stdio.h>

%}

%token NUM
%left '+' '-'
%left '*' '/'

%start line

%%

line:
			/* empty */
		| line exp '\n' { printf( "%d\n", $2 ); }
		| error    '\n'
		;

exp:	  exp '+' exp { $$ = $1 + $3 ; }
		| exp '-' exp { $$ = $1 - $3 ; }
		| exp '*' exp { $$ = $1 * $3 ; }
		| exp '/' exp { $$ = ( $3 ? $1 / $3 : 0 ) ; } 
		| NUM { $$ = $1 ; }
		;

%%

yyerror()
{
	printf( "Error \n" );
}

main()
{
	yyparse();
}

