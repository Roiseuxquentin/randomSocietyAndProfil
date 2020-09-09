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
      limit : 1,
      littleSize : true,
      name : "",
      number : "",
      address : "", 
      loaded : false
  }

  componentDidMount() {
    this.INSEE()
    setTimeout(() => this.INSEE() , 5000 )
  }

  INSEE() {
    if (this.state.base.length == 0) {
      fetch("https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/?per_page=50", { method: 'GET' } )
      .then(res => res.json())
      .then(res => {
        const resultFiltered = res.etablissements.filter(elt => (elt.unite_legale.categorie_juridique != "1000") )
        console.log("RESULT FILTERED", resultFiltered)
        return resultFiltered
      })
      .then(etablissements => {
        console.log("POST FILTRAGE")
        this.setState({base : etablissements , limit : etablissements.length })
        return
      })
      .then(res => this.setState({loaded : true}) )
    } else return
  }

  action() {
    const random = randomNumber(0,this.state.limit)

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

  openINSEE(e) {
    e.preventDefault();
    const url = "https://entreprise.data.gouv.fr/api_doc/"
    window.open(url,'_blank');
  }

  render() {
      if (this.state.loaded) {
        
        return (<div>
                  <Image bool={this.state.littleSize} action={() => this.action()} />
                  <AnimateOnChange>
                    <Society name={this.state.name} address={this.state.address} display={!this.state.littleSize} />
                    <SocietyId number={this.state.number} />
                  </AnimateOnChange>
                </div>)
      } else {
        return <div className="loader">
                  <Loader type="TailSpin" color="black"
                       height={180} width={180} />
                  <p className="loadingText finger blueHover" onClick={(e) => this.openINSEE(e)} >Chargement . . .</p> 
              </div>
      }
  }
}

export default Body;