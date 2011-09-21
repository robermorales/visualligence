#!/bin/sh

mkdir -p /var/www
mv /var/www/visualligence /tmp/
ln -s `pwd`/www/visualligence /var/www

mkdir -p /etc/apache2/sites-available
mv /etc/apache2/sites-available/visualligence /tmp/
ln -s `pwd`/sites-available/visualligence /etc/apache2/sites-available

a2dissite visualligence
a2ensite visualligence
service apache2 reload

