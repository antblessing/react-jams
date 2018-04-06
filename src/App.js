import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './styles/App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
    <div className="App mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          React Jams
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <Link className="mdl-layout__tab" to='/'>Home</Link>
          <Link className="mdl-layout__tab" to='/library'>Library</Link>
        </div>
      </header>

      <main className="mdl-layout__content main">
        <Route exact path="/" component={Landing} className="mdl-layout__tab-panel" id="fixed-tab-1"/>
        <Route path="/library" component={Library} className="mdl-layout__tab-panel" id="fixed-tab-2"/>
        <Route path="/album/:slug" component={Album}/>
      </main>
    </div>
    );
  }
}

export default App;
