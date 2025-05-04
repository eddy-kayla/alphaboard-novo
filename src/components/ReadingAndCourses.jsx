// src/components/ReadingAndCourses.jsx
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

function ReadingAndCourses() {
  const today = new Date().toISOString().split('T')[0];

  const [reading, setReading] = useState({
    bookTitle: '',
    progress: 0,
    dailyNote: ''
  });

  const [course, setCourse] = useState({
    courseTitle: '',
    progress: 0,
    dailyNote: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'learning', today);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setReading(data.reading || reading);
        setCourse(data.course || course);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      await setDoc(doc(db, 'learning', today), {
        reading,
        course
      });
    };
    saveData();
  }, [reading, course]);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-zinc-900 text-white rounded-xl">
      <h2 className="text-xl font-bold mb-4">📘 Leitura do Dia</h2>
      <input
        type="text"
        placeholder="Nome do Livro"
        value={reading.bookTitle}
        onChange={(e) => setReading({ ...reading, bookTitle: e.target.value })}
        className="w-full p-2 mb-2 rounded bg-zinc-800 border border-zinc-700"
      />
      <input
        type="number"
        placeholder="Progresso (%)"
        value={reading.progress}
        onChange={(e) => setReading({ ...reading, progress: parseInt(e.target.value) || 0 })}
        className="w-full p-2 mb-2 rounded bg-zinc-800 border border-zinc-700"
      />
      <textarea
        placeholder="Resumo ou ideias do dia"
        value={reading.dailyNote}
        onChange={(e) => setReading({ ...reading, dailyNote: e.target.value })}
        className="w-full p-2 h-28 mb-6 rounded bg-zinc-800 border border-zinc-700"
      />

      <h2 className="text-xl font-bold mb-4">🎓 Curso do Dia</h2>
      <input
        type="text"
        placeholder="Nome do Curso"
        value={course.courseTitle}
        onChange={(e) => setCourse({ ...course, courseTitle: e.target.value })}
        className="w-full p-2 mb-2 rounded bg-zinc-800 border border-zinc-700"
      />
      <input
        type="number"
        placeholder="Progresso (%)"
        value={course.progress}
        onChange={(e) => setCourse({ ...course, progress: parseInt(e.target.value) || 0 })}
        className="w-full p-2 mb-2 rounded bg-zinc-800 border border-zinc-700"
      />
      <textarea
        placeholder="Resumo ou anotações do dia"
        value={course.dailyNote}
        onChange={(e) => setCourse({ ...course, dailyNote: e.target.value })}
        className="w-full p-2 h-28 rounded bg-zinc-800 border border-zinc-700"
      />
    </div>
  );
}

export default ReadingAndCourses;
