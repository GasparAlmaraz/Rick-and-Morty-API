import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   const listaPersonajes = characters.map((personaje)=> {
      return (
         <Card
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      )
   })
   return <div className={styles.cardContainer}>{listaPersonajes}</div>;
}
