import React from 'react';
import Timeline from './timeline/Timeline';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Timeline of Marvel Events</h1>
      </header>
      <main>
        <Timeline />
      </main>
      <footer className="app-footer">
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://marvel.com">
            Data provided by Marvel. &copy; 2017 MARVEL
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
