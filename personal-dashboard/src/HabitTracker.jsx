import React, { useState } from 'react';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function HabitTracker() {
  const [input, setInput] = useState('');
  const [habits, setHabits] = useState([]);
  const [checks, setChecks] = useState({});

  const handleAdd = () => {
    if (input.trim()) {
      setHabits([...habits, input.trim()]);
      setInput('');
    }
  };

  const toggleCheck = (habitIdx, dayIdx) => {
    const key = `${habitIdx}-${dayIdx}`;
    setChecks({ ...checks, [key]: !checks[key] });
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Add a new habit..."
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #444', background: '#18191a', color: '#fff' }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '4px 8px' }}>Habit</th>
            {days.map((d, i) => (
              <th key={i} style={{ padding: '4px 8px' }}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, habitIdx) => (
            <tr key={habitIdx}>
              <td style={{ padding: '4px 8px' }}>{habit}</td>
              {days.map((_, dayIdx) => {
                const key = `${habitIdx}-${dayIdx}`;
                return (
                  <td key={dayIdx} style={{ textAlign: 'center', padding: '4px 8px' }}>
                    <input
                      type="checkbox"
                      checked={!!checks[key]}
                      onChange={() => toggleCheck(habitIdx, dayIdx)}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HabitTracker; 