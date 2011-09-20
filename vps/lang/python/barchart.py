#!/usr/bin/env python3
# -*- coding: utf-8 -*-

class barchart:
	def __init__(self):
		self.name="barchart"
	
	#header/footer y axis deberían estar aparte, así como los colores, etc.
	
	def header( self ):
#		print( 'Content-Type: text/html' )
#		print( 'Content-Type: text/plain' )
		print( 'Content-Type: image/svg+xml' )
		print( 'Access-Control-Allow-Origin: *' )
		print( '\n' ) #end headers

		print( '''<svg
			xmlns:svg="http://www.w3.org/2000/svg"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<rect x='0%' y='0%' width='100%' height='100%' style='fill:white;'
		/>
		''' )

		print( '''
			<defs id="defs17">
				<linearGradient id="a">
					<stop id="stop1" style="stop-color:#ffffff;stop-opacity:1" offset="0" />
					<stop id="stop2" style="stop-color:#ffffff;stop-opacity:0" offset="1" />
				</linearGradient>
				<linearGradient id="b" x1="0" y1="0" x2="1" y2="1" xlink:href="#a" gradientUnits="objectBoundingBox" />
			</defs>
		''' )
	
	def axis( self ):
		print( "<rect x='1%' y='99%' width='98%' height='0.5px' style='fill:black;' />" )
		print( "<rect x='1%' y='1%' width='0.5px' height='98%'  style='fill:black;' />" )
	
	def footer( self ):
		print( "</svg>" )
	
	def apply( self, obj ):
		colors=('#001100','#003300','#005500','#007700','#009900','#00BB00','#00DD00')
		style  = 'style="fill:%s"'
		styleg = 'style="fill:url(#b)"'
		sc=len(colors)
		s=len(obj)
		maxl=max(obj)#100#max(i['pib'] for i in obj)
		minl=0
		mm=20
		m=mm/(s+1)
		w=(98-mm)/s

		i = 0
		for a in obj:
			p = i*w+1+(i+1)*m
			h = a*98/maxl
			y = 99-h
			
			sss = style % colors[ i % len( colors ) ]
			for ss in (sss,styleg):
				print( "<rect x='%f%%' y='%f%%' width='%f%%' height='%f%%' %s />" % (p,y,w,h,ss) )
			i += 1
