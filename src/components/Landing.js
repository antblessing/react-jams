import React from 'react';
import '../styles/landing.css';

const Landing = () => (
  <section className="landing">
    <section className="selling-points">
      <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <span className="ion-music-note"></span>
        </div>
        <div className="mdl-card__supporting-text">
          The world is full of music; why should you have to listen to music that someone else chose?
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Choose your music
          </a>
        </div>
      </div>
      <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <span className="ion-music-note"></span>
        </div>
        <div className="mdl-card__supporting-text">
          No arbitrary limits. No distractions.
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Unlimited Streaming
          </a>
        </div>
      </div>
      <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <span className="ion-iphone"></span>
        </div>
        <div className="mdl-card__supporting-text">
          Mobile enabled so you can listen on the go.
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Listen Now
          </a>
        </div>
      </div>

    </section>
  </section>
);

export default Landing;
