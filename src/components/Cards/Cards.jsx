import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {

   const listaPersonajes = characters.map((personaje)=> {
      return (
         <Card
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
