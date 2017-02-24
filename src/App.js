import React, { Component } from 'react';
import logo from './logo.png';
import hero from './fahf_website_hero.png';
import './App.css';

const episodeURL = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.soundcloud.com%2Fusers%2Fsoundcloud%3Ausers%3A290085134%2Fsounds.rss&api_key=0tjef0mdha7ryfkqk9hoovmgwz7oweknjaoksobz';

class App extends Component {

  state = {
    episodes: [],
    selectedEpisode: {
      id: '',
      autoplay: false
    },
    emailAddress: '',
  }

  setSelectedEpisode = (episode, autoplay = false) => {
    let id  = episode.guid.match(/\/.*$/)[0].substring(1);
    this.setState({
      selectedEpisode: {
        id,
        autoplay
      }
    });
  }

  isValidEmail = () => {
    let email = this.state.emailAddress;
    let rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rejex.test(email);
  }

  componentDidMount() {
    fetch(episodeURL, {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      let episodes = json.items || [];
      if (!episodes.length) {
        return;
      }
      this.setState({
        episodes
      });
      //this.setselectedEpisode(episodes[0]);
    }).catch((err) => {
      debugger;
    });
  }

  render() {

    let selectedEpisode = '';
    let selectedEpisodeSrc = '';
    let validEmail = this.isValidEmail();
    let layoutWrapperClass = this.state.selectedEpisode.id ? 'layout-wrapper with-selected-episode' : 'layout-wrapper';

    if (this.state.selectedEpisode.id) {
      let selectedEpisodeSrc = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.state.selectedEpisode.id}&amp;color=f3616e&amp;auto_play=${this.state.selectedEpisode.autoplay}&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`
      selectedEpisode = <iframe className="soundcloud-player" width="100%" height="110" scrolling="no" frameBorder="no" src={selectedEpisodeSrc}></iframe>
    }

    return (
      <div className="app-wrapper">
        <header className="header">
          <div className="branding">
            <img className="branding__logo" alt="Flags and High Fives logo" src={logo} />
            <hgroup className="branding__text">
              <h1 className="branding__text__title">FLAGS AND HIGH FIVES</h1>
              <h2 className="branding__text__subtitle">A podcast retrospective</h2>
            </hgroup>
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="https://www.instagram.com/flagsandhighfives/" target="_BLANK" className='instagram'>Instagram</a></li>
              <li><a href="https://twitter.com/fahfpodcast" target="_BLANK" className="twitter">Twitter</a></li>
            </ul>
          </nav>
        </header>

        <div className={layoutWrapperClass}>
          <section className="content">
            {this.state.episodes.map((episode) => {
              return (
                <article className="content__item" key={episode.guid}>
                  <header className="content__item__header">
                    <button className="content__item__header__play" onClick={() => this.setSelectedEpisode(episode, true)}>Play</button>
                    <div className="content__item__header__text">
                      <h3 className="content__item__header__text__title">{episode.title}</h3>
                      <time className="content__item__header__text__date">Published: {episode.pubDate}</time>
                    </div>
                  </header>
                  <section className="content__item__description">{episode.description}</section>
                </article>
              )
            })}
          </section>
          <aside className="sidebar">
            <section className="newsletter">
              <h3 className="newsletter__title">Newsletter</h3>
              <p className="newsletter__description">Get notified of the latest episodes and news. We promise not to harrass you.</p>
              <div id="mc_embed_signup" className="newsletter__form">
                <form
                  action="http://arvinsingla.us1.list-manage.com/subscribe/post?u=b89ca2fcacbd5d9a28518d5cd&amp;id=5443a024ee"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                      <input
                        type="email"
                        placeholder="Email address"
                        value={this.state.emailAddress}
                        onChange={(evt) => this.setState({emailAddress: evt.target.value})}
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                      />
                    </div>
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                      <input type="text" name="b_b89ca2fcacbd5d9a28518d5cd_5443a024ee" tabIndex="-1" value="" />
                    </div>
                      <input
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        disabled={!validEmail}
                      />
                    </div>
                </form>
              </div>
           </section>
         </aside>
        </div>
        <div className="selected-episode">
          {selectedEpisode}
        </div>
      </div>
    );
  }
}

export default App;
