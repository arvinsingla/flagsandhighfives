import React, { Component } from 'react';

class Episode extends Component {

  playEpisode = (episodeId, autoplay = false) => {
    this.props.play(episodeId, autoplay);
  }

  render() {
    const { id, title, created_at, description } = this.props.data;

    return (
      <article className="content__item" key={id}>
        <header className="content__item__header">
          <button className="content__item__header__play" onClick={() => this.playEpisode(id, true)}>Play</button>
          <div className="content__item__header__text">
            <h3 className="content__item__header__text__title">{title}</h3>
            <time className="content__item__header__text__date">Published: {created_at}</time>
          </div>
        </header>
        <section className="content__item__description">{description}</section>
      </article>
    );
  }
}

export default Episode;
