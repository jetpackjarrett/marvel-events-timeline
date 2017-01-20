import React, { Component } from 'react';
import { range } from 'lodash';
import { fetchFromMarvel } from '../services/marvelApi';
import EventDetail from '../eventDetail/EventDetail';
import TimelineEvent from './TimelineEvent';
import './timeline.css';

export default class Timeline extends Component {

  state = {
    eventsByYear: null,
    selectedEvent: null
  };

  componentDidMount() {
    fetchFromMarvel('events', { orderBy: 'startDate', limit: 100 })
      .then(this.setEvents);
  }

  setEvents = (response) => {
    const events = response.data.results.filter((result) => result.start && result.end);
    const years = range(new Date(events[0].start).getFullYear(), new Date().getFullYear());
    const eventsByYear = years.reduce((memo, year) => {
      memo[year] = events.filter(({ start }) => new Date(start).getFullYear() === year);
      return memo;
    }, {});
    this.setState({ eventsByYear });
  }

  selectEvent = (selectedEvent) => () => this.setState({ selectedEvent });

  deselectEvent = () => this.setState({ selectedEvent: null });

  render() {
    const { eventsByYear, selectedEvent } = this.state;

    if (!eventsByYear) {
      return <div className="loader" />;
    }

    return (
      <div className="timeline">
        {eventsByYear && Object.keys(eventsByYear).map((year) => {
          const events = eventsByYear[year];

          return (
            <section key={year} className="timeline-year">
              <header>
                <h2>{year}</h2>
              </header>
              <article className="timeline-year-events">
                {events.map((event) => (
                  <TimelineEvent
                    key={event.id}
                    handleClick={this.selectEvent(event)}
                    {...event} />
                ))}
              </article>
            </section>
          );
        })}
        {selectedEvent && <EventDetail {...selectedEvent} onClose={this.deselectEvent} />}
      </div>
    );
  }
}
