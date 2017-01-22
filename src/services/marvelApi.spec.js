import { getImageUrl, fetchFromMarvel } from './marvelApi';

describe('Marvel Api', () => {
  describe('fetchFromMarvel', () => {
    afterEach(() => {
      window.localStorage.setItem.mockReset();
    });

    it('requests data from the marvel api', (done) => {
      const mockResponse = { data: ['foo', 'bar'] };
      fetch.mockResponse(JSON.stringify(mockResponse));
      fetchFromMarvel('/events').then((response) => {
        expect(mockResponse).toEqual(response);
        expect(localStorage.setItem).toHaveBeenCalled();
        done();
      });
    });

    it('works with full urls', (done) => {
      const mockResponse = { data: ['foo', 'bar'] };
      fetch.mockResponse(JSON.stringify(mockResponse));
      fetchFromMarvel('http://marvel-api-mock.com/events').then((response) => {
        expect(mockResponse).toEqual(response);
        done();
      });
    });

    it('handles params', (done) => {
      const mockResponse = { data: ['foo', 'bar'] };
      fetch.mockResponse(JSON.stringify(mockResponse));
      fetchFromMarvel('http://marvel-api-mock.com/events', { limit: 50 }).then((response) => {
        expect(mockResponse).toEqual(response);
        done();
      });
    });

    it('caches the resposne', (done) => {
      const mockResponse = { data: ['foo', 'bar'] };
      fetch.mockResponse(JSON.stringify(mockResponse));
      fetchFromMarvel('http://marvel-api-mock.com/events').then(() => {
        expect(window.localStorage.setItem.mock.calls.length).toBe(1);
        expect(window.localStorage.setItem.mock.calls[0][0]).toEqual('http://marvel-api-mock.com/events');
        done();
      });
    });
  });

  describe('getImageUrl', () => {
    it('combines the path, extension, and size args into a usable image url', () => {
      expect(getImageUrl({
        path: 'http://mock-image-url.com',
        extension: 'jpg',
      }, 'small')).toEqual('http://mock-image-url.com/small.jpg');
      expect(getImageUrl({
        path: 'http://mock-image-url.com',
        extension: 'jpg',
      })).toEqual('http://mock-image-url.com/portrait_small.jpg');
    });
  });
});
