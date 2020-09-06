import React, {Component} from 'react';

import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

import './App.css';
import './styles/footer.css';
import './styles/global.css';
import './styles/body.css';
import './styles/society.css';
import './styles/animate.css';

/*/=============================================\
  ||                      .__                  ||
  ||   ____   ____   ____ |  |   ____   ____   ||
  || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  ||
  || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) ||
  ||  \___  >\___  >___  /|____/\____/ \____/  ||
  ||      \/     \/_____/                  2020||
  \=============================================/ */


class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
      societes : []
  }

      this.action = this.action.bind()
  }

  componentDidMount() {
    console.clear()
    document.onselectstart = new Function ("return false")
  }

  action() {
    const text = 'je lis'
    return text
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
