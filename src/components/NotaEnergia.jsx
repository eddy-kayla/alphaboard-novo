import React from 'react';

function NotaEnergia({ energia, handleInput }) {
  return (
    <>
      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>⚡ Nota de Energia</h2>
      <input
        type='range'
        min='0'
        max='10'
        value={energia}
        onChange={(e) => handleInput('energia', e.target.value)}
      />
      <p>Energia do dia: <strong>{energia}/10</strong></p>
    </>
  );
}

export default NotaEnergia;
