#!/bin/sh

mkdir -p /tmp/deleted

for i in `find -name *~*|grep '\/\.[^/]*~'`;
do
	echo $i
	mv $i /tmp/deleted/;
done
