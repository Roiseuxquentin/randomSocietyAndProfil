#!/bin/bash
# Convertie une liste de ville en code postal

################################################### 
#*/=============================================\*# 
# ||                      .__                  || #
# ||   ____   ____   ____ |  |   ____   ____   || #
# || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
# || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
# ||  \___  >\___  >___  /|____/\____/ \____/  || #
# ||      \/     \/_____/                  2020|| #
#.\=============================================/.#
###################################################

listVille=$1
listCodePostal=$2

[ -z $1 ] && echo "fichier a traiter absent" && exit 1
[ -z $1 ] && echo "fichier de sortie absent" && exit 1

[ ! -e $input ] && echo "impossible de cibler $1" && exit 1
 
read ville < $listVille

count=1
array=()
lines=`cat $listVille | wc -l`

while [ $count -lt $lines ]
do
        line=$(sed "${count}q;d" $listVille)
        sleep 0.1
        zip=$(curl -s https://vicopo.selfbuild.fr/\?city\=${line// /%20} | sed 's/,/\n/g' | grep code | head -n 1)
        array+="\"$zip\","
        
        echo "$count / $lines"
        count=$(($count+1))
done

touch $listCodePostal
echo $array > $listCodePostal
