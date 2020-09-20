import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

import copyToClipboard from './copyMe.js'

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

const SocietyId = ({number}) => {

    return ( 
      <div className='identifiant' >
        <figure style={{margin : "0px"}} >
          <pre className="rippleEffect" >
            <code data-tip={"Cliquez pour ajouter le SIRET au presse papier"} 
                  className="finger code" 
                  onClick={(event)=> copyToClipboard(number) } >
            {number}
            </code>
          </pre>
        </figure> 
        <ReactTooltip />
      </div> )
  }

export default SocietyId
