#!/bin/bash

cd ws-server-php/
wget https://getcomposer.org/composer-stable.phar
php composer-stable.phar update
php server.php


