import React from 'react';

/*==========================================='\ 
||                      .__                  || 
||   ____   ____   ____ |  |   ____   ____   || 
|| _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || 
|| \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || 
||  \___  >\___  >___  /|____/\____/ \____/  || 
||      \/     \/_____/                  2020|| 
\.===========================================*/

const formatName = (denomination,nom,prenom) => {
	let proprio = []

	if (denomination) return denomination
	if (nom) proprio.push(nom)
	if (prenom) proprio.push(prenom)

	return proprio.join(' ')
}

export default formatName