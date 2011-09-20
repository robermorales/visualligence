#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class barchart:
	def __init__(self):
		self.name="barchart"
	
	#header/footer y axis deberían estar aparte, así como los colores, etc.
	
	def header( self ):
#		print( 'Content-Type: text/html\n' )
#		print( 'Content-Type: text/plain\n' )
		print( 'Content-Type: image/svg+xml\n' )

		print( '''<svg
			xmlns:svg="http://www.w3.org/2000/svg"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>''' )

		print( '''
			<defs id="defs17">
				<linearGradient id="a">
					<stop id="stop1" style="stop-color:#ffffff;stop-opacity:1" offset="0" />
					<stop id="stop2" style="stop-color:#ffffff;stop-opacity:0" offset="1" />
				</linearGradient>
				<linearGradient id="b" x1="1" y1="1" x2="0" y2="0" xlink:href="#a" gradientUnits="objectBoundingBox" />
			</defs>
		''' )
	
	def axis( self ):
		print( "<rect x='10%' y='90%' width='90%' height='0.5px' style='fill:black;' />" )
		print( "<rect x='10%' y='0%' width='0.5px' height='90%'  style='fill:black;' />" )
	
	def footer( self ):
		print( "</svg>" )
	
	def apply( self, obj ):
		colors=('#001100','#003300','#005500','#007700','#009900','#00BB00','#00DD00')
		style  = 'style="fill:%s"'
		styleg = 'style="fill:url(#b)"'
		sc=len(colors)
		s=len(obj)
		maxpib=max(i['pib'] for i in obj)
		minpib=0
		mm=20
		m=mm/(s+1)
		w=(90-mm)/s

		i = 0
		a = 0
		for a in obj:
			dir(a)
			p = i*w+10+(i+1)*m
			h = a['pib']*80/maxpib
			y = 90-h
			
			sss = style % colors[ i % sc ]
			for ss in (sss,styleg):
				print( "<rect x='%f%%' y='%f%%' width='%f%%' height='%f%%' %s />" % (p,y,w,h,ss) )
			i += 1
