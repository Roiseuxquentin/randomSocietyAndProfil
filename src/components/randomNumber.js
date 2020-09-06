import React from 'react';

/*==========================================='\ 
||                      .__                  || 
||   ____   ____   ____ |  |   ____   ____   || 
|| _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || 
|| \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || 
||  \___  >\___  >___  /|____/\____/ \____/  || 
||      \/     \/_____/                  2020|| 
\.===========================================*/

const randomNumber = (min,max) => {
	const debut = Math.ceil(min)
	const fin = Math.floor(max)
	const randomNb = Math.floor(Math.random() * (debut - fin)) + fin
	return randomNb
}

export default randomNumber