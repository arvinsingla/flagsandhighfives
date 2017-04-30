import React from 'react';
import Sidebar from './Sidebar';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Sidebar />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
