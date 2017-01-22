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
        <p>Data provided by Marvel. © 2014 Marvel</p>
      </footer>
    </div>
  );
};

export default App;
