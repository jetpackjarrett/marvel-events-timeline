import React, { PropTypes } from 'react';
import { getImageUrl } from '../services/marvelApi';

const Comics = ({ comics  }) => {
  return (
    <section>
      <h4>Comics</h4>
      <div className="event-detail-comics">
        {comics ? (
          comics
            .filter((comic) => comic.issueNumber > 0)
            .map(({ id, thumbnail, title, urls }) => {
              return (
                <div key={id} className="event-detail-comic">
                  <a rel="noopener noreferrer" target="_blank" href={urls[0].url}>
                    <img src={getImageUrl(thumbnail, 'portrait_medium')} alt={title} />
                  </a>
                </div>
              );
            })
          ) : (
            <div className="loader" />
          )
        }
      </div>
    </section>
  );
};

Comics.propTypes = {
  comics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    issueNumber: PropTypes.number,
    thumbnail: PropTypes.shape({
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.array.isRequired,
  })),
};

export default Comics;
