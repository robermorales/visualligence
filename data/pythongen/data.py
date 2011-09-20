#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import random
import yaml
import json
import cgi,cgitb; cgitb.enable()

#https://spreadsheets.google.com/spreadsheet/tq?key=0Auz3ko8uUdphdHI1RDdWMk93QmtLUHdpb2prZHBxbmc&range=A1:B10


print( 'Content-Type: text/plain' )
print( 'Access-Control-Allow-Origin: *' )
print( '\n' ) #end headers

form = cgi.FieldStorage()
q    = form.getvalue( 'q' )
if( isinstance( q, str ) ):
	q = yaml.load( q )
else:
	q = { 'o': [ 'oid' ] }

f = open( 'd3.yaml', 'r' )
s = yaml.load( f )

l = s

#for a in range( q['limit'] ):
	#obj = {
	#}
	#for o in q['o']:
		#obj[ o ] = random.randint(0,10)
##	'pib'     : random.gauss(50,5),
	#l.append( obj )

def ann( x ):
	a = {}
	for k in q['o']:
		a[ k ] = x[ k ]
	return a

l = list( map( ann, l ) )

if( 's' in q.keys() ):
	l = sorted( l, key=lambda a: a[q['s']])

print( yaml.dump( { 'result' : l, 'q': q } ) )
