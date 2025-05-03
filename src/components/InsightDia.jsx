import React from 'react';

function InsightDia({ insight, handleInput }) {
  return (
    <>
      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>📝 Insight do Dia</h2>
      <textarea
        placeholder='O que aprendi ou percebi hoje?'
        value={insight}
        onChange={(e) => handleInput('insight', e.target.value)}
        rows='4'
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '8px',
          resize: 'vertical'
        }}
      />
    </>
  );
}

export default InsightDia;
