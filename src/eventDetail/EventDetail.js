import React, { Component, PropTypes } from 'react';
import { fetchFromMarvel, getImageUrl } from '../services/marvelApi';
import Creators from './Creators';
import Comics from './Comics';
import './eventDetail.css';

export default class EventDetail extends Component {

  static propTypes = {
    comics: PropTypes.shape({
      collectionURI: PropTypes.string.isRequired,
    }).isRequired,
    creators: PropTypes.shape({
      items: PropTypes.array.isRequired,
    }).isRequired,
    description: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    thumbnail: PropTypes.shape({
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.array.isRequired,
  };

  state = {};

  componentDidMount() {
    fetchFromMarvel(this.props.comics.collectionURI)
      .then((response) => this.setState({ comics: response.data.results }));
  }

  render() {
    const { urls, description, creators, title, onClose } = this.props;
    const { comics } = this.state;
    const image = getImageUrl(this.props.thumbnail, 'standard_fantastic');

    return (
      <div className="event-detail-container">
        <button onClick={onClose} className="event-detail-close-button">
          &times;
        </button>
        <div className="event-detail">
          <header className="event-detail-header">
            <div><img src={image} alt="cover" /></div>
            <div className="event-detail-header-text">
              <h3>{title}</h3>
              <p>{description}</p>
              {urls.map(({ url, type }, i) => (
                <a
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}>
                  {type}
                </a>
              ))}
            </div>
          </header>
          <div className="event-detail-content">
            <Creators creators={creators.items} />
            <Comics comics={comics} />
          </div>
        </div>
      </div>
    );
  }
}
