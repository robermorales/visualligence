#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import cgi,cgitb; cgitb.enable()
import yaml
from barchart import barchart

form = cgi.FieldStorage()
d    = form.getvalue( 'd' )
obj  = yaml.load( d )[ 'result' ]

# pattern / barchart
p = barchart()

# interpreter / svg
p.header()

# scale / normal 2d
p.axis()

# series / only 1
p.apply( obj )

# interpreter / svg
p.footer()
