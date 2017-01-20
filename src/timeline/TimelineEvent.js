import React, { PropTypes, Component } from 'react';
import { getImageUrl } from '../services/marvelApi';
import './timelineEvent.css';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default class TimelineEvent extends Component {

  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    start: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  };

  state = {
    imageUrl: null
  };

  componentDidMount() {
    const imageUrl = getImageUrl(this.props.thumbnail, 'standard_fantastic');
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => this.setState({ imageUrl });
  }

  formatDate(date) {
    const parsed = new Date(date);
    return `${MONTH_NAMES[parsed.getMonth()]} ${parsed.getFullYear()}`;
  }

  render() {
    const { title, start, handleClick } = this.props;
    const { imageUrl } = this.state;
    const classNames = ['timeline-event'];

    if (imageUrl) {
      classNames.push('ready');
    }

    return (
      <div
        className={classNames.join(' ')}
        onClick={handleClick}
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <aside>
          <h3>{title}</h3>
          <p>
            <time>{this.formatDate(start)}</time>
          </p>
        </aside>
      </div>
    );
  }
}
