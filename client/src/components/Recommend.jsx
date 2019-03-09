import React from 'react';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet';

export default class Recommend extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <Navigation />
        <div className="container recommend">
          <img src={process.env.PUBLIC_URL + '/mlm.png'} alt="" />
          <h3>
            Obsługa Audio Wizualna:{' '}
            <a href="http://www.musiclightmagic.com/" rel="nofollow" target="_blank">
              Music Light Magic
            </a>
          </h3>
          <img src={process.env.PUBLIC_URL + '/logo-cpr_0.png'} alt="" />
          <h3>
            Willa & Karczma Cztery Pory Roku:{' '}
            <a href="http://www.czteryporyroku.pl/karczma/wesela/pakiety-weselne" rel="nofollow" target="_blank">
              Cztery Pory Roku
            </a>
          </h3>
        </div>
      </div>
    );
  }
}
