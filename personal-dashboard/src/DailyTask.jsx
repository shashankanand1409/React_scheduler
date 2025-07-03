import React, { useState } from 'react';

function DailyTask({ day }) {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (input.trim() && input.length <= 40) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const handleDelete = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <div className="daily-task-card">
      <h3 style={{ color: '#fff', margin: '10px 0 20px 0' }}>{day}</h3>
      <div style={{className: 'inputbox-daily-task', display: 'flex', gap: 8 }}>
        <input
          className="inputtext-daily-task"
          type="text"
          placeholder={`Add task for ${day}...`}
          value={input}
          onChange={e => setInput(e.target.value)}
          maxLength={40}
          style={{ flex: 1, maxWidth: 260, padding: 7, borderRadius: 6, border: '1px solid #444', background: '#18191a', color: '#fff' }}
        />
        <button className = "addbutton-daily-task" onClick={handleAdd}>Add</button>
      </div>
      <ul style={{ marginTop: 12, paddingLeft: 5 }}>
        {tasks.map((t, i) => (
          <li key={i} className = "new-item-added" style={{ color: '#fff', marginBottom: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className='daily-task-content' title={t}>{t}</span>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <input type="checkbox" className = "checkbox-daily-task" style={{ marginRight: 10, cursor: 'pointer'}} />
              <button
                onClick={() => handleDelete(i)}
                style={{ padding: '4px 10px', borderRadius: 6, background: '#c0392b', color: '#fff', border: 'none', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyTask; 