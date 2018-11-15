import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Regulations from './components/Regulations';
import Contact from './components/Contact';
import MMPStudio from './components/Main';
import Gallery from './components/Gallery';
import Fotobudka from './components/Fotobudka';
import FotobudkaGallery from './components/FotobudkaGallery';
import Jubiler from './components/Jubiler';
import JubilerGallery from './components/JubilerGallery';
import Recommend from './components/Recommend';
import Footer from './components/Footer';

import './style/style.scss';
import Video from './components/Video';
import GoToTop from './components/GoToTop';

// Main APP
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <GoToTop />
          <Switch>
            <Route exact path="/" component={MMPStudio} />
            <Route exact path="/galeria" component={Gallery} />
            <Route exact path="/kontakt" component={Contact} />
            <Route exact path="/fotobudka" component={Fotobudka} />
            <Route exact path="/jubiler" component={Jubiler} />
            <Route exact path="/regulamin" component={Regulations} />
            <Route exact path="/polecamy" component={Recommend} />
            <Route exact path="/wideo" component={Video} />
            <Route path="/fotobudka/galeria" component={FotobudkaGallery} />
            <Route exact path="/jubiler/galeria" component={JubilerGallery} />
            <Redirect from="*" to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
