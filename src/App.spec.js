/*eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }] */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('App', () => {
  it('renders the App', () => {
    const component = shallow(
      <App />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
