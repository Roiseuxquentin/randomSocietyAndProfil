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

// LOAD JSON DATA
// FILTER KEY ON CODE OBJECT WITH HASTAG INPUT

class Lycos extends Component {

  state = {
    input : "      Recherche...",
    displayBar : true,
    mounted : true
  }
  
  vaChercher() {
    this.setState({displayBar : !this.state.displayBar})
  }

  vaTrouver(e) {
    let url
    let isSiret = /^\d+$/.test(this.state.input);

    if (e.key !== 'Enter') { return; }

    if (isSiret) {
        url = `https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/${this.state.input}`
    } else {
        url = `https://entreprise.data.gouv.fr/search?fullText=${this.state.input}&page=1`
    } 

    window.open(url,'_blank')
    return
  }

  render() {
    return (
      <div id="lycos" > 
        <form id="lycosForm">
          <input  type="text" id="lycosBar" 
                  value={this.state.input}
                  onClick={() => this.setState({input : "" })}
                  onChange={(e) => this.setState({input : e.target.value})}
                  onKeyPress={(e) => this.vaTrouver(e) }
                  className={(this.state.displayBar) ? "casperColor finger" : "square finger" } />

          <button type="reset"  id="lycosBtn"
                  className={(this.state.displayBar) ? "search" : "search close" }
                  onClick={() => this.vaChercher()} ></button>
        </form>
      </div>
    )
  }
}

export default Lycos;