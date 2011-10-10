persona(A) :- 
	hombre(A) | mujer(A).

hermano(A,B) :-
	hijo(A,P),
	hijo(B,P),
	A \== B.

hijo(A,B) :-
	padre(B,A) | madre(B,A).

hombre( pepe ).
mujer( juana ).

padre( pepe, pepito ).
padre( pepe, pepita ).
madre( juana, pepito ).
madre( juana, pepita ).


