#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# net, query
import sys
import cgi,cgitb; cgitb.enable()
import urllib.request

# parser
import yaml,json

# pattern, interpreter, scale, series
#from barchart import barchart

# net / file,http
#f = open( "../data/d1.yaml", 'r' )
f = urllib.request.urlopen( 'http://localhost/~rober/extern/data/data.py' )

# query / get all
s = f.read()

# parser / yaml
obj = yaml.load( s )[ 'result' ]

print( obj )
