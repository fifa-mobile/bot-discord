#!/bin/sh

for f in configs/*.tpl; do

  #This line splits the file name on the delimiter "."
  baseName=`echo $f | cut -d "." -f 1`
  newExtension=".json"

  cp $f $baseName$newExtension

done
