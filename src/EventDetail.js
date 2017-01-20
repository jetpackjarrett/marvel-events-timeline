import React, { Component } from 'react';
import { fetchFromMarvel, getImageUrl } from './services/marvelApi';
import './eventDetail.css';

const Creators = ({ creators }) => {
  const creatorsByRole = creators.reduce((memo, { role, name }) => {
    if (!memo[role]) {
      memo[role] = [];
    }

    memo[role].push(name);
    return memo;
  }, {});

  return (
    <section>
      <h4>Creators</h4>
      <ul className="event-detail-header-text-creators">
        {Object.keys(creatorsByRole).map(role => {
          return (
            <li key={role} className="event-detail-header-text-creator">
              <strong>{role}</strong>
              <span>{creatorsByRole[role].join(', ')}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Comics = ({ comics = [] }) => {
  return (
    <section>
      <h4>Comics</h4>
      <div className="event-detail-comics">
        {comics.length === 0 && <div className="loader" />}
        {comics
          .filter(comic => comic.issueNumber > 0)
          .map(({ id, thumbnail, title, comic, urls }) => {

          return (
            <div key={id} className="event-detail-comic">
              <a target="_blank" href={urls[0].url}>
                <img src={getImageUrl(thumbnail, 'portrait_medium')} alt={title} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default class EventDetail extends Component {

  state = {};

  componentDidMount() {
    fetchFromMarvel(this.props.comics.collectionURI)
      .then(response => this.setState({ comics: response.data.results }));
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
              {urls.map((url, i) => <a key={i} target="_blank" href={url.url}>{url.type}</a>)}
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
