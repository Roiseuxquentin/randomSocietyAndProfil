import React, {Component} from 'react';

// ################################################### 
// #*/=============================================\*# 
// # ||                      .__                  || #
// # ||   ____   ____   ____ |  |   ____   ____   || #
// # || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
// # || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
// # ||  \___  >\___  >___  /|____/\____/ \____/  || #
// # ||      \/     \/_____/                  2020|| #
// #.\=============================================/.#
// ###################################################

const Society = ({name,address, display}) => {

  if (display) {
    return ( 
      <div className='society' >
        <h1>{name}</h1> 
        <p style={{fontStyle : 'italic'}} >{address}</p> 
      </div> )
  } else {
    return <div />
  }
}

export default Society