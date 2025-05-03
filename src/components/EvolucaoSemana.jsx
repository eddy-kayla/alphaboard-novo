import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function EvolucaoSemana({ weeklyData }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>📊 Evolução da Semana</h2>
      <ResponsiveContainer width='100%' height={200}>
        <BarChart data={weeklyData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='dia' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='valor' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EvolucaoSemana;
