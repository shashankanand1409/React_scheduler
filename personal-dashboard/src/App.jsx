import React from 'react';
import './App.css';
import WeeklyPriorities from './WeeklyPriorities';
import HabitTracker from './HabitTracker';
import DailyTask from './DailyTask';

function App() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>My Personal Dashboard</h1>
        <div className="dashboard-date">{formattedDate}</div>
      </header>
      <section className="dashboard-section">
        <h2>Weekly Priorities</h2>
        <WeeklyPriorities />
      </section>
      <section className="dashboard-section">
        <h2>Habit Tracker</h2>
        <HabitTracker />
      </section>
      <div className="dashboard-days">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
          <DailyTask key={day} day={day} />
        ))}
      </div>
    </div>
  );
}

export default App;
