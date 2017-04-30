import React from 'react';
import Episode from './Episode';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

it('renders correctly', () => {
  const episode = {
    id: '123456',
    title: 'Hello World',
    created_at: '06-06-1981',
    description: 'I am a very model of a modern major general'
  }
  const tree = renderer.create(
    <Episode data={episode} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('calls callback on episode play', () => {
  const episode = {
    id: '123456',
    title: 'Hello World',
    created_at: '06-06-1981',
    description: 'I am a very model of a modern major general'
  }
  const play = (id, autoplay) => {
    expect(id).toBe(episode.id);
  }
  const episodeRender = shallow(
    <Episode data={episode} play={play} />
  );
  episodeRender.find('.content__item__header__play').simulate('click');
});
