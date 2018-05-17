+#!/bin/sh
+echo "`sudo apt-get update -y`"
+echo "`sudo apt-get install curl libcurl3 -y`"
+echo "`sudo apt-get install unzip -y`"
+echo "`sudo apt-get install libjansson-dev -y`"
+echo "`cd /var`"
+echo "`mkdir geek`"
+echo "`cd geek`"
+echo "`wget https://github.com/GeekCash/cpuminer-multi/files/1957549/cpuminer-multi.zip`"
