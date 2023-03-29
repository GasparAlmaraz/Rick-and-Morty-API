import Card from '../Card/Card';
import styles from './Cards.module.css';
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/action';
import { useEffect } from 'react';

export default function Cards({characters, onClose}) {

   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(getFavorites);
   },[]);

   const listaPersonajes = characters.map((personaje)=> {
      return (
         <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            onClose={onClose}
         />
      )
   })
   return <div className={styles.cardContainer}>{listaPersonajes}</div>;
}
