/*eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }] */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Creators from './Creators';

describe('EventDetail Creators', () => {
  it('renders the creators grouped by role', () => {
    const component = shallow(
      <Creators
        creators={[
          {
            name: 'Stan Lee',
            role: 'writer'
          },
          {
            name: 'Jack Kirby',
            role: 'penciller',
          },
          {
            name: 'Steve Ditko',
            role: 'penciller',
          },
          {
            name: 'John Romita Sr.',
            role: 'penciler',
          }
        ]} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
