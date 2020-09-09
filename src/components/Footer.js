import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { AnimateOnChange } from 'react-animation'

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

class Footer extends Component {

  constructor(props) {
      super(props)
      this.state = {
        // url : "http://127.0.0.1:3000/",
         url : "http://88.127.234.194/",
        linksBoard : [
                        {   id:"dynamics",
                            name : "https://dynamics.microsoft.com/fr-fr/",
                            src:"https://www.digitaleo.fr/wp-content/uploads/2019/07/Microsoft-Dynamics-365.png"
                        }]
      }
  }
                        // {   id:"powerApps",
                        //     name : "https://powerapps.microsoft.com/fr-fr/",
                        //     src:"https://miro.medium.com/max/256/1*2hgWgLPZeCFY2ClIstwLyA.png"
                        // },
                        // {   id:"power automate",
                        //     name : "https://flow.microsoft.com/fr-fr/",
                        //     src:"https://www.anttext.com/wp-content/uploads/2020/01/Power-Automate-Icon.png"
                        // },

 openDynamics(e) {
    e.preventDefault();
    const url = e.target.name
    const id = e.target.id
    window.open(url,'_blank');
 }

    render() {
        const btn = this.state.linksBoard[0] 
        return (<div className="footer fadeIn"  >
                    <ReactTooltip />
                    <img onClick={(e) => this.openDynamics(e) } 
                        id={btn.id}
                        data-tip={btn.id}
                        name={(!!btn.name) ? btn.name : "" }
                        className={"footerItem"} 
                        src={btn.src} />
                </div>
                )
    }
}
                        // { this.state.linksBoard.map((btn,i) => <img onClick={(e) => this.openDynamics(e) } 
                        //                                             key={i}
                        //                                             id={btn.id}
                        //                                             data-tip={btn.id}
                        //                                             name={(!!btn.name) ? btn.name : "" }
                        //                                             className={"footerItem"} 
                        //                                             src={btn.src} /> ) }

export default Footer;