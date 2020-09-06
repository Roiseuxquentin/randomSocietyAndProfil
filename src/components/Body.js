import React, {Component} from 'react';
import { AnimateOnChange } from 'react-animation'
import Loader from 'react-loader-spinner'

import Society from './Society.js'
import SocietyId from './SocietyId.js'
import Image from './Image.js'

import formatAddress from './formatAddress.js'
import formatName from './formatName.js'
import randomNumber from './randomNumber.js'

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

class Body extends Component {

  state = {
      base : [],
      littleSize : true,
      name : "",
      number : "",
      address : "", 
      loaded : false
  }

  componentDidMount() {
    if (this.state.base.length == 0) {
      fetch("https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/", { method: 'GET' } )
      .then(res => res.json())
      .then(res => { 
        this.setState({base : res.etablissements })
        return
      })
      .then(res => this.setState({loaded : true}) )
    }
  }


  action() {
    const random = randomNumber(0,20)

    if (this.state.base.length > 0) {

      let etablissement = this.state.base[random]
      let address = formatAddress(etablissement.libelle_voie,etablissement.libelle_commune,etablissement.code_postal)
      let name = formatName(etablissement.unite_legale.denomination,etablissement.unite_legale.nom,etablissement.unite_legale.prenom_1)

      this.setState({littleSize : false,
                     number: etablissement.siret,
                     name : name,
                     address : address })
    }
  }

  render() {
      if (this.state.loaded) {
        
        return (<AnimateOnChange>
                <Image bool={this.state.littleSize} action={() => this.action()} />
                <Society name={this.state.name} address={this.state.address} display={!this.state.littleSize} />
                <SocietyId number={this.state.number} />
              </AnimateOnChange>)
      } else {
        return <div className="loader">
                  <Loader type="TailSpin" color="black"
                       height={180} width={180} />
              </div>
      }
  }
}

export default Body;