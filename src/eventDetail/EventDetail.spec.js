/*eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }] */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import EventDetail from './EventDetail';

jest.mock('../services/marvelApi', () => {
  return {
    getImageUrl: jest.fn(),
    fetchFromMarvel: jest.fn(() => Promise.resolve())
  };
});

describe('EventDetail', () => {
  it('renders the event detail', () => {
    const onClose = jest.fn();
    const component = mount(
      <EventDetail
        comics={{
          collectionURI: 'http://fake-collection-uri.com/comics'
        }}
        creators={{
          items: []
        }}
        description="mock description"
        thumbnail={{
          path: 'http://fake-image.com/large',
          extension: 'jpg',
        }}
        title="Mock Comic"
        urls={[{ type: 'detail', url: 'http://fake-detail.com' }]}
        onClose={onClose} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
