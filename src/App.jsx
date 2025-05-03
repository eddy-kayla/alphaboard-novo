import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import ReadingAndCourses from './components/ReadingAndCourses';

function App() {
  const [checklist, setChecklist] = useState({
    leitura: false,
    treino: false,
    planejamento: false,
    microvitoria: false
  });

  const [extra, setExtra] = useState({
    energia: 5,
    insight: ''
  });

  const handleCheck = (item) => {
    setChecklist({ ...checklist, [item]: !checklist[item] });
  };

  const handleInput = (field, value) => {
    setExtra({ ...extra, [field]: value });
  };

  const weeklyData = [
    { dia: 'Seg', valor: 2 },
    { dia: 'Ter', valor: 3 },
    { dia: 'Qua', valor: 5 },
    { dia: 'Qui', valor: 4 },
    { dia: 'Sex', valor: 1 },
    { dia: 'Sáb', valor: 6 },
    { dia: 'Dom', valor: 4 }
  ];

  return (
    <div style={{
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#111',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      borderRadius: '12px',
      boxShadow: '0 0 16px rgba(0, 0, 0, 0.5)'
    }}>
      <h1 style={{ fontSize: '1.8rem' }}>AlphaBoard</h1>
      <p style={{ color: '#8f8', marginBottom: '1rem' }}>
        Painel ativo em: <strong>{new Date().toLocaleDateString()}</strong>
      </p>

      <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem' }}>Check-in Diário</h2>
      <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
        <label>
          <input type="checkbox" checked={checklist.leitura} onChange={() => handleCheck('leitura')} />
          <span style={{ marginLeft: '0.5rem' }}>Leitura feita</span>
        </label><br />
        <label>
          <input type="checkbox" checked={checklist.treino} onChange={() => handleCheck('treino')} />
          <span style={{ marginLeft: '0.5rem' }}>Treino realizado</span>
        </label><br />
        <label>
          <input type="checkbox" checked={checklist.planejamento} onChange={() => handleCheck('planejamento')} />
          <span style={{ marginLeft: '0.5rem' }}>Planejamento do dia</span>
        </label><br />
        <label>
          <input type="checkbox" checked={checklist.microvitoria} onChange={() => handleCheck('microvitoria')} />
          <span style={{ marginLeft: '0.5rem' }}>Microvitória conquistada</span>
        </label>
      </div>

      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Nota de Energia</h2>
      <input
        type="range"
        min="0"
        max="10"
        value={extra.energia}
        onChange={(e) => handleInput('energia', e.target.value)}
      />
      <p>Energia do dia: <strong>{extra.energia}/10</strong></p>

      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Insight do Dia</h2>
      <textarea
        placeholder="O que aprendi ou percebi hoje?"
        value={extra.insight}
        onChange={(e) => handleInput('insight', e.target.value)}
        rows="4"
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '8px',
          resize: 'vertical'
        }}
      />

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Evolução da Semana</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valor" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <ReadingAndCourses />
      </div>
    </div>
  );
}

export default App;
