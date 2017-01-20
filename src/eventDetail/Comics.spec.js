/*eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }] */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Comics from './Comics';

describe('EventDetail Comics', () => {
  it('renders comics thumbnails from the given comics array', () => {
    const component = shallow(
      <Comics
        comics={[
          {
            id: 111,
            issueNumber: 1,
            title: 'Amazing Javascript #1',
            thumbnail: {
              extension: '.jpg',
              path: 'http://mock-image.com/fake',
            },
            urls: [{ url: 'http://mock-url-ajs.com' }],
          },
          {
            id: 222,
            issueNumber: 2,
            title: 'Amazing Javascript #2',
            thumbnail: {
              extension: '.jpg',
              path: 'http://mock-image.com/fake2',
            },
            urls: [{ url: 'http://mock-url-ajs2.com' }],
          },
        ]} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('when no comics prop is supplied, the loader is shown instead', () => {
    const component = shallow(
      <Comics />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
