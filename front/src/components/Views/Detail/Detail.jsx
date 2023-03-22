import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(){
    
    const [character, setCharacter] = useState({});
    const {detailId} = useParams();
    useEffect(() => {

      const URLBASE = "http://localhost:3001/rickandmorty/detail/";
    
      // !!!!!! MUY IMPORTANTE
      const APIKEY = "67f45d299611.46234457e8c467c632bb";
      // !!!!!! MUY IMPORTANTE

        fetch(`${URLBASE}/character/${detailId}?key=${APIKEY}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
    }, [detailId]);

      return(
        <div>
          <h1>Nombre: {character.name}</h1>
          <h2>Status: {character.status}</h2>
          <h2>Specie: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin?.name}</h2>
          <img src={character.image} alt=""/>
          <hr/>
          <Link to='/cards'>
            <button>Home</button>
          </Link>
        </div>
      )
}