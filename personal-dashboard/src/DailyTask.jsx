import React, { useState } from 'react';

function DailyTask({ day }) {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  return (
    <div className="daily-task-card">
      <h3 style={{ color: '#fff', margin: '0 0 8px 0' }}>{day}</h3>
      <div style={{ display: 'flex', gap: 6 }}>
        <input
          type="text"
          placeholder={`Add task for ${day}...`}
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, padding: 7, borderRadius: 6, border: '1px solid #444', background: '#18191a', color: '#fff' }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        {tasks.map((t, i) => (
          <li key={i} style={{ color: '#fff', marginBottom: 5 }}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default DailyTask; 