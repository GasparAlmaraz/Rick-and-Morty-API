import { useSelector } from "react-redux";
import Card from "../../Card/Card";
import styles from './Favorites.module.css'

const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites);

    
    return <div className={styles.cardContainer}>
        {favorites.map((personaje)=> {
        return (
           <Card
              key={personaje.id}
              id={personaje.id}
              name={personaje.name}
              species={personaje.species}
              gender={personaje.gender}
              image={personaje.image}
           />
        )
        })}
    </div>;
}

export default Favorites;