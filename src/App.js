import React, {Component} from 'react';

import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

import './App.css';
import './styles/global.css';
import './styles/body.css';
import './styles/society.css';
import './styles/footer.css';
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
    societes : []
  }

  componentDidMount() {
    console.clear()
    document.onselectstart = new Function ("return false")
  }

  render() {
      return (
          <div>
            <Header />
            <Body societes={this.state.societes} />
            <Footer />
          </div>
      )
  }
}

export default App;
