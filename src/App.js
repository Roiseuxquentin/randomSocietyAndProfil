import React, {Component} from 'react';

import Profils from './components/Profils.js'
import Header from './components/Header.js'
import Society from './components/Society.js'
import Image from './components/Image.js'

import './App.css';
import './styles/global.css';
import './styles/body.css';
import './styles/profils.css';
import './styles/society.css';
import './styles/animate.css';
import './styles/phone.css';

/*/=============================================\
  ||                      .__                  ||
  ||   ____   ____   ____ |  |   ____   ____   ||
  || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  ||
  || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) ||
  ||  \___  >\___  >___  /|____/\____/ \____/  ||
  ||      \/     \/_____/                  2020||
  \=============================================/ */


class App extends Component {

  state = {
    societes : [],
    page : "profil",

  }

  componentDidMount() {
    document.onselectstart = new Function ("return false")
  }

  onChangePage(e) {
    if (e && e.target && e.target.id) {
      this.setState({page : e.target.id})
    }
  }

  render() {
      return (
          <div>
            <Header onChangePage={(e) => this.onChangePage(e)} />
            { (this.state.page == "entreprises") ? 
            (<div>
                <Image page="Lycos" bool="Lycos" action={()=>console.clear()} action={() => console.clear()}  />
                <Society societes={this.state.societes} page={this.state.page} />
              </div>)
              : <Profils societes={this.state.societes} page={this.state.page} />
            }
          </div>
      )
  }
}

export default App;
