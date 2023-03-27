import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const {URL, APIKEY} = process.env;

export default function Detail(){
    
    const [character, setCharacter] = useState({});
    const {detailId} = useParams();
    useEffect(() => {


        fetch(`${URL}/detail/${detailId}?key=${APIKEY}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch(() => {
            window.alert("Error");
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