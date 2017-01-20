/*eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }] */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimelineEvent from './TimelineEvent';

jest.mock('../services/marvelApi');

describe('TimelineEvent', () => {
  it('renders the timeline event', () => {
    const component = shallow(
      <TimelineEvent
        handleClick={jest.fn()}
        start="1984-20-08"
        thumbnail={{
          path: 'http://fake-image.com/large',
          extension: 'jpg',
        }}
        title="Test Wars" />
    );
    component.setState({ imageUrl: 'http://fake-image.com/large.jpg' });
    expect(toJson(component)).toMatchSnapshot();
  });
});
