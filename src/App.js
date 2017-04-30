import React, { Component } from 'react';
import Episode from './Episode';
import Sidebar from './Sidebar';
import Header from './Header';
import './App.css';

const soundcloudApi = 'http://api.soundcloud.com/tracks?client_id=lXuRTH6OJk7SmQZtb2MDGbGSMOkKxWPF&user_id=290085134&limit=100';

class App extends Component {

  state = {
    episodes: [],
    selectedEpisode: {
      id: '',
      autoplay: false
    }
  }

  setSelectedEpisode = (id, autoplay = false) => {
    this.setState({
      selectedEpisode: {
        id,
        autoplay
      }
    });
  }

  componentDidMount() {
    fetch(soundcloudApi, {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((json) => {
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
        <Header />

        <div className={layoutWrapperClass}>
          <section className="content">
            {this.state.episodes.map((episode) => {
              return (
                <Episode data={episode} play={this.setSelectedEpisode} key={episode.id}/>
              )
            })}
            {noEpisodes}
          </section>
          <Sidebar />
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
