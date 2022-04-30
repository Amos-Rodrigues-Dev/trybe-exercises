import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card, CardProps } from '../../components/Card';

type ProfileResponse = {
  name: string;
  avatar_url: string;
};

type UserProfile = {
  name: string;
  avatar: string;
};

export function Home() {
  const studentInit = {
    name: '',
    time: Date,
  };

  const [student, setStudent] = useState(studentInit);
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<UserProfile>({} as UserProfile);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    const newStudent = {
      name: student.name,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    if (newStudent.name != '') {
      setStudents((prevState) => [...prevState, newStudent]);
      setStudent(studentInit);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const url = 'https://api.github.com/users/amos-rodrigues-dev';
      const response = await fetch(url);
      const data = (await response.json()) as ProfileResponse;

      data &&
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      <input
        type="text"
        name="name"
        value={student.name}
        placeholder="Digite o nome"
        onChange={handleNameChange}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
