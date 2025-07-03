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

  const handleDelete = (habitIdx) => {
    setHabits(habits.filter((_, idx) => idx !== habitIdx));
    // Remove checks for this habit
    const newChecks = { ...checks };
    days.forEach((_, dayIdx) => {
      delete newChecks[`${habitIdx}-${dayIdx}`];
    });
    setChecks(newChecks);
  };

  const handleDeleteAll = () => {
    setHabits([]);
    setChecks({});
  };

  const toggleCheck = (habitIdx, dayIdx) => {
    const key = `${habitIdx}-${dayIdx}`;
    setChecks({ ...checks, [key]: !checks[key] });
  };

  return (
    <div class = "habit-tracker-container" style={{columnGap: "20px", color: '#fff' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 25 }}>
        <input
          type="text"
          placeholder="Add a new habit..."
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #444', background: '#18191a', color: '#fff' }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <table className="habit-tracker-table" style={{ width: '100%', color: '#fff', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={{ textAlign: 'center', padding: '4px 8px' }}>Habit</th>
            {days.map((d, i) => (
              <th key={i} style={{ padding: '4px 8px', textAlign: 'center'}}>{d}</th>
            ))}
            {habits.length > 0 && (
              <th style={{ padding: '4px 8px', alignItems: 'center', textAlign: 'center' }}>
                <button onClick={handleDeleteAll} style={{padding: '4px 10px', borderRadius: 6, background: '#393e46', color: '#fff', border: 'none', cursor: 'pointer' }}>Delete All</button>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, habitIdx) => (
            <tr key={habitIdx} className='habit-tracker-row'>
              <td style={{ padding: '4px 8px', textAlign: 'center' }}>{habit}</td>
              {days.map((_, dayIdx) => {
                const key = `${habitIdx}-${dayIdx}`;
                return (
                  <td key={dayIdx} style={{ textAlign: 'center', padding: '4px 8px', maxWidth:'130px' }}>
                    <input
                      type="checkbox"
                      checked={!!checks[key]}
                      onChange={() => toggleCheck(habitIdx, dayIdx)}
                    />
                  </td>
                );
              })}
               
                <td style={{ textAlign: 'center', padding: '4px 8px', width: '87.5938px', marginTop: '20px' }}>
                  <button onClick={() => handleDelete(habitIdx)} style={{width: '87.5938px', padding: '4px 10px', borderRadius: 6, background: '#c0392b', color: '#fff', border: 'none', cursor: 'pointer' }}>Delete</button>
                </td> 
              </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HabitTracker; 