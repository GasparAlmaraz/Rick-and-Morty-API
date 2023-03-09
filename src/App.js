import React, {useState} from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'

function App () {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const URLBASE = "https://be-a-rym.up.railway.app/api";
    
    // !!!!!! MUY IMPORTANTE
    const APIKEY = "67f45d299611.46234457e8c467c632bb";
    // !!!!!! MUY IMPORTANTE

    fetch(`${URLBASE}/character/${id}?key=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con ese ID o ya fue agregado.');
      }
       });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch}/>
      <hr/>
        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
      
}

export default App;