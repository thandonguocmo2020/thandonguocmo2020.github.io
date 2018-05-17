#!/bin/sh
echo "`sudo apt-get update -y`"
echo "`sudo apt-get install curl libcurl3 -y`"
echo "`sudo apt-get install unzip -y`"
echo "`sudo apt-get install libjansson-dev -y`"
echo "`sudo cd /var`"
echo "`sudo mkdir geek`"
echo "`sudo cd geek`"
echo "`sudo wget https://github.com/GeekCash/cpuminer-multi/files/1957549/cpuminer-multi.zip`"
echo "`sudo unzip cpuminer-multi.zip`"
echo "`sudo cd cpuminer-multi/`"
echo "`sudo nano cpuminer-conf.json`"

