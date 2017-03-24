import React, { Component } from 'react';
import hero from './fahf_website_hero.png';
import itunes from './itunes-badge.png';
import googleplay from './google-badge.png';
import './App.css';

const soundcloudApi = 'http://api.soundcloud.com/tracks?client_id=lXuRTH6OJk7SmQZtb2MDGbGSMOkKxWPF&user_id=290085134&limit=100';

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
    let id  = episode.id;
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
    fetch(soundcloudApi, {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      let episodes = json || [];
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
    let noEpisodes = '';

    if (this.state.selectedEpisode.id) {
      selectedEpisodeSrc = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.state.selectedEpisode.id}&amp;color=f3616e&amp;auto_play=${this.state.selectedEpisode.autoplay}&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`
      selectedEpisode = <iframe className="soundcloud-player" width="100%" height="110" scrolling="no" frameBorder="no" src={selectedEpisodeSrc}></iframe>
    }

    if (this.state.episodes.length === 0) {
      noEpisodes = <div className="no-episodes">No episodes could be found</div>
    }

    return (
      <div className="app-wrapper">
        <header className="header">
          <div className="branding">
            <img className="branding__hero" alt="Flags and High Fives logo" src={hero} />
            <hgroup className="branding__text">
              <h1 className="branding__text__title">FLAGS AND HIGH FIVES</h1>
              <h2 className="branding__text__subtitle">A podcast retrospective</h2>
              <p className="branding__text__description">Friends and former podcasters extraordinaire, Arvin and Ben, look back on their success, shortcomings, and the ultimate downfall of their hit 2007 video game podcast. </p>
              <hr className="branding__text__separator" />
              <h3 className="branding__text__newsletter__title">Subscribe</h3>
              <p className="branding__text__newsletter__text">
                Get notified of the latest episodes and news. We promise not to spam you.
              </p>
              <form
                action="http://arvinsingla.us1.list-manage.com/subscribe/post?u=b89ca2fcacbd5d9a28518d5cd&amp;id=5443a024ee"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="branding__text__newsletter__form"
                target="_blank"
                noValidate
              >
                <input
                  type="email"
                  placeholder="Email address"
                  value={this.state.emailAddress}
                  onChange={(evt) => this.setState({emailAddress: evt.target.value})}
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                />
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
              </form>
            </hgroup>
          </div>
        </header>

        <div className={layoutWrapperClass}>
          <section className="content">
            {this.state.episodes.map((episode) => {
              return (
                <article className="content__item" key={episode.id}>
                  <header className="content__item__header">
                    <button className="content__item__header__play" onClick={() => this.setSelectedEpisode(episode, true)}>Play</button>
                    <div className="content__item__header__text">
                      <h3 className="content__item__header__text__title">{episode.title}</h3>
                      <time className="content__item__header__text__date">Published: {episode.created_at}</time>
                    </div>
                  </header>
                  <section className="content__item__description">{episode.description}</section>
                </article>
              )
            })}
            {noEpisodes}
          </section>
          <aside className="sidebar">
            <section className="social">
              <ul>
                <li><a href="https://www.instagram.com/flagsandhighfives/" target="_BLANK" title="Instagram" alt="Instagram" className='instagram'>Instagram</a></li>
                <li><a href="https://twitter.com/fahfpodcast" target="_BLANK" className="twitter" title="Twitter" alt="Twitter">Twitter</a></li>
                <li><a href="https://www.facebook.com/FAHFpodcast/" target="_BLANK" className="facebook" alt="facebook" title="facebook">Facebook</a></li>
              </ul>
            </section>
            <section className="services">
              <ul>
                <li>
                  <a href="https://itunes.apple.com/ca/podcast/flags-and-high-fives-a-podcast-retrospective/id1218051476" target="_BLANK" title="iTunes" alt="iTunes" className='itunes'>
                    <img src={itunes} alt="Subscribe on iTunes" />
                  </a>
                </li>
                <li>
                  <a href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Iaeedrwhbsquvbpo3adkxm6mpay?t%3DFlags_and_High_Fives:_A_podcast_retrospective%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16" target="_BLANK" title="iTunes" alt="iTunes" className='itunes'>
                    <img src={googleplay} alt="Subscribe on Google Play Music" />
                  </a>
                </li>
              </ul>
           </section>
         </aside>
         <footer>
           <p>&copy; 2017 Arvin & Ben</p>
         </footer>
        </div>
        <div className="selected-episode">
          {selectedEpisode}
        </div>
      </div>
    );
  }
}

export default App;
