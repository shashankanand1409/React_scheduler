import React, { useState } from 'react';

function WeeklyPriorities() {
  const [input, setInput] = useState('');
  const [priorities, setPriorities] = useState([]);

  const handleAdd = () => {
    if (input.trim()) {
      setPriorities([...priorities, input.trim()]);
      setInput('');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          placeholder="Add a weekly priority..."
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #444', background: '#18191a', color: '#fff' }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul style={{ marginTop: 16, paddingLeft: 18 }}>
        {priorities.map((p, i) => (
          <li key={i} style={{ color: '#fff', marginBottom: 6 }}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default WeeklyPriorities; 