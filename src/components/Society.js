import React, {Component} from 'react';
import { AnimateOnChange } from 'react-animation'
import Loader from 'react-loader-spinner'

import SocietyBoard from './SocietyBoard.js'
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

class Society extends Component {

  state = {
      base : [],
      limit : 1,
      littleSize : true,
      info : false,
      name : "",
      number : "",
      address : "", 
      loaded : false,
      clickJacking : false
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
    setTimeout(() => document.getElementById("moulinette").classList.remove("coucou") , 1000)

    if ((this.state.base.length > 0) && (!this.state.clickJacking)) {

      let etablissement = this.state.base[random]
      let address = formatAddress(etablissement.libelle_voie,etablissement.libelle_commune,etablissement.code_postal)
      let name = formatName(etablissement.unite_legale.denomination,etablissement.unite_legale.nom,etablissement.unite_legale.prenom_1)

      this.setState({littleSize : false,
                     info : etablissement,
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

  preventClickJacking() {
    clearTimeout(this.timeout);
    
    if (!this.state.clickJacking) {
      this.setState({clickJacking : true})
    }
    this.timeout = setTimeout(() => this.setState({clickJacking : false}), 1000)
  }

  render() {
      if (this.state.loaded) {
                
        return (<div className="noMargin noPadding">
      
                  <Image bool={this.state.littleSize} action={() => this.action()} page={"siret"}  stopIt={() => this.preventClickJacking() } />
                    { ( !this.state.littleSize ) 
                      ? (<AnimateOnChange>
                            <SocietyBoard name={this.state.name} address={this.state.address} display={!this.state.littleSize} />
                            <SocietyId number={this.state.number} />
                          </AnimateOnChange>)
                      : <div /> }
                
                </div>)
                      // : <h1> {`${this.props.page[0].toUpperCase() + this.props.page.substring(1)}`}</h1>}
      } else {
        return <div className="loader">
                  <Loader type="TailSpin" color="black"
                       height={180} width={180} />
                  <p className="loadingText finger" onClick={(e) => this.openINSEE(e)} >Chargement . . .</p> 
              </div>
      }
  }
}

export default Society;