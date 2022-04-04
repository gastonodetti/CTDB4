#!/bin/bash

req=`curl https://raw.githubusercontent.com/olea/lemarios/master/nombres-propios-es.txt | shuf`
countA=0
countL=0
countSuma=0

funcionRapida(){
echo $nombre
    curl -s https://api.genderize.io/?name=$nombre | jq '.gender' | { read -r gen; echo "Gender of $nombre is: $gen"; }
    curl -s https://api.nationalize.io?name=$nombre | jq '.country[0].country_id' | { read -r pais; echo "Country of $nombre is: $pais"; }
}
funcionBonita(){
    echo "-------------------------------------------"
}

for nombre in $req
do
if [[ $nombre == A* ]] && [ $countA -le 4 ] ; then
    funcionRapida
    funcionBonita
let "countA++"
fi
done
for nombre in $req
do
if [[ $nombre == L* ]] && [ $countL -le 4 ] ; then
    funcionRapida
    funcionBonita
let "countL++"
fi
done
for nombre in $req
do
if [[ $nombre != A* ]] && [[ $nombre != L* ]] && [ $countSuma -le 4 ] ; then
    funcionRapida
    funcionBonita
let "countSuma++"
fi
done