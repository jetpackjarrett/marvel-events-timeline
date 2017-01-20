/*eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }] */
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Timeline from './Timeline';

const mockResponse = {
  data: {
    results: [
      {
        start: '1995-10-21',
        end: '1995-10-28',
        id: 123,
        handleClick: jest.fn(),
        thumbnail: {
          extension: '.jpg',
          path: 'http://mock-image.com/fake',
        },
        title: 'Amazing Javascript #1',
      }
    ]
  }
};

jest.mock('../services/marvelApi', () => {
  return {
    getImageUrl: jest.fn(),
    fetchFromMarvel: jest.fn(() => Promise.resolve(mockResponse))
  };
});

describe('Timeline', () => {
  it('renders the timeline using data set to state from api fetch', () => {
    const component = mount(<Timeline />);
    component.instance().setEvents(mockResponse);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('selectEvent', () => {
    it('sets selectedEvent state to the given event', () => {
      const mockEvent = 'NOT_A_REAL_EVENT';
      const component = shallow(<Timeline />);
      component.instance().selectEvent(mockEvent)();
      expect(component.state().selectedEvent).toEqual(mockEvent);
    });
  });

  describe('deselectEvent', () => {
    it('sets selectedEvent state to null', () => {
      const component = shallow(<Timeline />);
      component.instance().deselectEvent();
      expect(component.state().selectedEvent).toEqual(null);
    });
  });
});
