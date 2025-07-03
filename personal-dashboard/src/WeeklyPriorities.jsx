import React, { useState } from 'react';

function WeeklyPriorities() {
  const [input, setInput] = useState('');
  const [priorities, setPriorities] = useState([]);

  const handleAdd = () => {
    if (input.trim() && input.length <= 40) {
      setPriorities([...priorities, input.trim()]);
      setInput('');
    }
  };

  const handleDelete = (idx) => {
    setPriorities(priorities.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          placeholder="Add a weekly priority..."
          value={input}
          onChange={e => setInput(e.target.value)}
          maxLength={40}
          style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #444', background: '#18191a', color: '#fff' }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul style={{ marginTop: 16, paddingLeft: 2}}>
        {priorities.map((p, i) => (
          <div
            key={i}
            style={{ color: '#fff', marginBottom: 15, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <span>{p}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <input
                type="checkbox"
                style={{ marginRight: 0, height: '20px', width: '20px', cursor: 'pointer' }}
              />
              <button
                onClick={() => handleDelete(i)}
                style={{ height: '36.5px', width: '60.47px', padding: '4px', borderRadius: 6, background: '#c0392b', color: '#fff', border: 'none', cursor: 'pointer', textAlign: 'center' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default WeeklyPriorities; 