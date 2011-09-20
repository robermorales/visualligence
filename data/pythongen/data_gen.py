#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import random
import yaml
import json
import cgi,cgitb; cgitb.enable()

#https://spreadsheets.google.com/spreadsheet/tq?key=0Auz3ko8uUdphdHI1RDdWMk93QmtLUHdpb2prZHBxbmc&range=A1:B10

print( 'Content-Type: text/plain\n' )

l = []
i = 1

for a in range( 1000 ):
	l.append({
		'oid'   : i,
		'source': random.randint(1,192),
		'target': random.randint(1,192),
		'hour'  : random.gauss(12,12),
		'minute': random.randint(0,59),
		'second': random.randint(0,59),
		'size'  : random.randint(25,100)
	})
	i = i + 1

print( yaml.dump( l ) )
