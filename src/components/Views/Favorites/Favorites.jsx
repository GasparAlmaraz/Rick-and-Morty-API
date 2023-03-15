import { useDispatch, useSelector } from "react-redux";
import Card from "../../Card/Card";
import styles from './Favorites.module.css'
import { filterCards, orderCards } from "../../../redux/action";

const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    const handleOrderChange = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilterChange = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
    <div>
        <div>
            <select name="ORDER" onChange={handleOrderChange}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendiente">Descendiente</option>
            </select>
            <select name="FILTER" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div className={styles.cardContainer}>
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
        </div>
    </div>
    )
}

export default Favorites;