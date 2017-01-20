import { getImageUrl, fetchFromMarvel, MARVEL_API_URL, MARVEL_API_KEY } from './marvelApi';

describe('Marvel Api', () => {
  describe('fetchFromMarvel', () => {
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
