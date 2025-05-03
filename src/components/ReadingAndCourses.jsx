// src/ReadingAndCourses.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
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
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', background: '#111', color: 'white', borderRadius: '12px' }}>
      <h2 style={{ fontSize: '1.5rem' }}>Leitura do Dia</h2>
      <input
        type="text"
        placeholder="Nome do Livro"
        value={reading.bookTitle}
        onChange={(e) => setReading({ ...reading, bookTitle: e.target.value })}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="number"
        placeholder="Progresso (%)"
        value={reading.progress}
        onChange={(e) => setReading({ ...reading, progress: parseInt(e.target.value) })}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <textarea
        placeholder="Resumo, ideias ou aprendizados"
        value={reading.dailyNote}
        onChange={(e) => setReading({ ...reading, dailyNote: e.target.value })}
        style={{ width: '100%', height: '80px' }}
      />

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Curso do Dia</h2>
      <input
        type="text"
        placeholder="Nome do Curso"
        value={course.courseTitle}
        onChange={(e) => setCourse({ ...course, courseTitle: e.target.value })}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="number"
        placeholder="Progresso (%)"
        value={course.progress}
        onChange={(e) => setCourse({ ...course, progress: parseInt(e.target.value) })}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <textarea
        placeholder="Resumo, ideias ou reflexões"
        value={course.dailyNote}
        onChange={(e) => setCourse({ ...course, dailyNote: e.target.value })}
        style={{ width: '100%', height: '80px' }}
      />
    </div>
  );
}

export default ReadingAndCourses;
