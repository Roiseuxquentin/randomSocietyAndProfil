import React, {Component} from 'react';
import Loader from 'react-loader-spinner'

import HumanCard from './HumanCard.js'
import Image from './Image.js'

import randomNumber from './randomNumber.js'

import villes from '../data/villes.json'
import humains from '../data/humains.json'
import noms from '../data/noms.json'
import metiers from '../data/metiers.json'
import mails from '../data/mails.json'


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

const formatDate = (j,m,a) => {
  if (j < 10) j = `0${j}`
  if (m < 10) m = `0${m}`
  return `${j}/${m}/${a}`
}

const randomPhoneNumber = () => {
  
  const digit = ["0"]
  let i = 0

  while (i < 10) {
    if (i == 0 ) digit.push(String(randomNumber(6,8))) 
    else digit.push(String(randomNumber(0,10)))
    i++
  }

  return digit.join("")
}


const createProfil = () => {
  let humain = humains[randomNumber(0,humains.length)]  
  let prenom = humain.prenom
  let genre = humain.genre
  let nom = noms[randomNumber(0,noms.length)]   
  let date =  formatDate(randomNumber(1,31),randomNumber(1,12),randomNumber(1942,2002))
  let ville = villes[randomNumber(0,villes.length)]
  let mail = mails[randomNumber(0,mails.length)]  
  let metier = metiers[randomNumber(0,metiers.length)]  
  let phone = randomPhoneNumber()  

  const profil = [ {
          prenom : prenom, 
          genre : genre ,
          nom : nom ,
          mail : `${prenom}.${nom.replace(" ",".")}@${mail}`,
          date : date ,
          ville : ville.city ,
          zip : ville.zip ,
          metier : metier,
          phone : phone,
           } ]
  return profil
}

function faireQqc() {
  return new Promise((resolve, failureCallback) => {
    return resolve(createProfil())
  })
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

class Profils extends Component {

  state = {
      base : [],
      limit : 1,
      littleSize : false,
      loaded : false,
      clickJacking : false
  }

  componentDidMount() {
        this.action()
  }

  action() {
      // fetch("http://localhost:9000/data/profils", { method: 'GET' } )
      // .then(res => res.json())
      // .then(profil => {
      //   this.setState({base : profil })
      //   return
      // })

      if (!this.state.loaded) {
        this.setState({loaded : true})
        return
      }


      if (!this.state.clickJacking) {
      
        const promise = faireQqc()
        return promise
        .then(res => this.setState({base : res }) )
        .then(res => {if (!this.state.littleSize) this.setState({littleSize : true }) })
      }
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
                  <Image 
                    bool={this.state.littleSize}
                    page={"profil"}
                    action={() => this.action()} 
                    stopIt={() => this.preventClickJacking() } />

                    {(this.state.littleSize) 
                      ? <HumanCard bool profils={this.state.base} /> 
                      : <div /> }
                      
                </div>)
                      // : <h1> {`${this.props.page[0].toUpperCase() + this.props.page.substring(1)}`}</h1>}

    } else return <div />
  }

}

export default Profils;