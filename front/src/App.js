import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

import { Cards, Nav, About, Detail, Form, Favorites } from './components';
const URLBASE = process.env.URL;
const APIKEY = process.env.APIKEY;

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "password1";
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/cards');
    }
  }

  const logout = (event) => {
    event.preventDefault();
    setAccess(false);
    navigate('/');
  }

  function onSearch(id) {

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido")
    }

    axios.get(`${URLBASE}/${id}?key=${APIKEY}`)
      .then(response => {
        const data = response.data;
        if (data.name) {
          setCharacters(oldChars => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID.');
        }
      })
      .catch(error => console.log(error));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const location = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/cards' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )

}

export default App;