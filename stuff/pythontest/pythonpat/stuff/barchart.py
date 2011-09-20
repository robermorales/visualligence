#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys,yaml

obj = yaml.load( sys.stdin )

print( 'Content-Type: image/svg+xml' )
print( '\n\n' )

print( '<svg>' )

s=len(obj)

style  = 'style="fill:%s"'
styleg = 'style="fill:url(#b)"'

print( '''
	<defs id="defs17">
		<linearGradient id="a">
			<stop id="stop1" style="stop-color:#ffffff;stop-opacity:1" offset="0" />
			<stop id="stop2" style="stop-color:#ffffff;stop-opacity:0" offset="1" />
		</linearGradient>
		<linearGradient id="b" x1="1" y1="1" x2="0" y2="0" xlink:href="#a" gradientUnits="objectBoundingBox" />
	</defs>
''' )

max=25
min=0
mm=20
m=mm/(s+1)
w=(90-mm)/s

colors=('red','green','blue','magenta','yellow')
sc=len(colors)

i = 0
for a in obj:
	p = i*w+10+(i+1)*m
	h = obj[a]*80/max
	y = 90-h
	
	sss = style % colors[ i % sc ]
	for ss in (sss,styleg):
		print( "<rect x='%f%%' y='%f%%' width='%f%%' height='%f%%' %s />" % (p,y,w,h,ss) )
	i += 1

print( "<rect x='10%' y='90%' width='90%' height='0.5px' style='fill:black;' />" )
print( "<rect x='10%' y='0%' width='0.5px' height='90%' style='fill:black;' />" )


#print( '</svg>' )
