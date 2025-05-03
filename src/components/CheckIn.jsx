import React from 'react';

function CheckIn({ checklist, handleCheck }) {
  return (
    <>
      <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem' }}>🧠 Check-in Diário</h2>
      <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
        {Object.entries(checklist).map(([key, value]) => (
          <label key={key}>
            <input type='checkbox' checked={value} onChange={() => handleCheck(key)} />
            <span style={{ marginLeft: '0.5rem' }}>
              {key === 'leitura' && '📚 Leitura feita'}
              {key === 'treino' && '🏋️‍♀️ Treino realizado'}
              {key === 'planejamento' && '🗓️ Planejamento do dia'}
              {key === 'microvitoria' && '✨ Microvitória conquistada'}
            </span>
            <br />
          </label>
        ))}
      </div>
    </>
  );
}

export default CheckIn;
