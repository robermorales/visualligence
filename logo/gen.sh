#!/bin/sh

for i in 16 32 64
do
	inkscape -e logo_$i.png -w ${i} -h ${i} logo.svg 
done

convert logo_* favicon.ico

