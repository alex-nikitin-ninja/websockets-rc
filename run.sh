#!/bin/bash

cd ws-server-php/
mkdir tmp/
chmod 777 tmp/
rm -r composer-stable.phar
wget https://getcomposer.org/composer-stable.phar
php composer-stable.phar update
php server.php


