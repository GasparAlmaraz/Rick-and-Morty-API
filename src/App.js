import React, {useState} from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/Views/About/About'
import Detail from './components/Views/Detail/Detail'
import Form from './components/Views/Form/Form';

function App () {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const URLBASE = "https://be-a-rym.up.railway.app/api";
    
    // !!!!!! MUY IMPORTANTE
    const APIKEY = "67f45d299611.46234457e8c467c632bb";
    // !!!!!! MUY IMPORTANTE

    if(characters.find((char) => char.id === id)){
      return alert("Personaje repetido")
    }

    fetch(`${URLBASE}/character/${id}?key=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con ese ID.');
      }
       });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const location = useLocation();
  return (
    <div className='App' style={{ padding: '25px' }}>
        {location.pathname !== "/" && <Nav onSearch={onSearch}/>} 
        <Routes>
          <Route path='/' element= {<Form/>}/>
          <Route path='/cards' element= {<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
        </Routes>
    </div>
  )
      
}

export default App;