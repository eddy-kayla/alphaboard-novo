// src/App.jsx
import React from 'react';
import ReadingAndCourses from './components/ReadingAndCourses';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans flex flex-col md:flex-row">
      {/* Painel lateral (Check-in, energia, gráfico semanal etc.) */}
      <aside className="w-full md:w-72 bg-black border-r border-neutral-800 p-4 flex-shrink-0">
        <h1 className="text-2xl font-bold mb-4">AlphaBoard</h1>
        <p className="text-green-400 text-sm mb-6">🟢 Painel ativo em: <strong>03/05/2025</strong></p>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Check-in Diário</h2>
          <ul className="space-y-1 text-sm">
            <li><input type="checkbox" /> Leitura feita</li>
            <li><input type="checkbox" /> Treino realizado</li>
            <li><input type="checkbox" /> Planejamento do dia</li>
            <li><input type="checkbox" /> Microvitória conquistada</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Nota de Energia</h2>
          <input type="range" min="0" max="10" value="5" className="w-full" />
          <p className="text-sm mt-1">Energia do dia: <strong>5/10</strong></p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Insight do Dia</h2>
          <textarea className="w-full h-20 p-2 bg-neutral-800 border border-neutral-700 text-sm text-white rounded" placeholder="O que aprendi ou percebi hoje?"></textarea>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">Evolução da Semana</h2>
          <div className="bg-neutral-800 p-2 rounded text-sm">
            {/* Placeholder para gráfico */}
            <p className="text-center text-gray-400">[Gráfico semanal]</p>
          </div>
        </section>
      </aside>

      {/* Bloco principal de Leitura e Cursos */}
      <main className="flex-1 p-6 overflow-y-auto">
        <ReadingAndCourses />
      </main>
    </div>
  );
}

export default App;
