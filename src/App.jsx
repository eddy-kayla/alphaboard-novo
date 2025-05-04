import React from 'react';
import DailyCheckIn from './components/DailyCheckIn';
import EnergyScore from './components/EnergyScore';
import DailyInsight from './components/DailyInsight';
import WeeklyProgress from './components/WeeklyProgress';
import ReadingAndCourses from './components/ReadingAndCourses';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      <header className="text-center py-6">
        <h1 className="text-5xl font-bold">AlphaBoard</h1>
        <p className="mt-2 text-green-400 text-sm">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          Painel ativo em: <strong>03/05/2025</strong>
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-4 space-y-10">
        <section>
          <DailyCheckIn />
        </section>

        <section>
          <EnergyScore />
        </section>

        <section>
          <DailyInsight />
        </section>

        <section>
          <WeeklyProgress />
        </section>

        <section>
          <ReadingAndCourses />
        </section>
      </main>
    </div>
  );
}

export default App;
