import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/action';
import { useState, useEffect } from 'react';
import axios from "axios";

function Card({ id, name, species, gender, image, onClose, myFavorites }) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();

   const addFavorite = (character) => {
      axios.post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("Personaje añadido a favoritos"));
   }

   const deleteFavorite = async (id) =>{
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      dispatch(getFavorites());
      alert("Personaje eliminado de favoritos");
   }
   
   const handleFavorite = () => {
      if (isFav) {
         deleteFavorite(id);
      } else {
         addFavorite({ id, name, species, gender, image });
      }
       setIsFav(!isFav);
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.divCard}>
         <button className={styles.buttonCard} onClick={()=>onClose(id)}>X</button>
         
         {isFav ? (
         <button className={styles.favButton}  onClick={handleFavorite}>❤️</button>
         ) : (
         <button className={styles.favButton} onClick={handleFavorite}>🤍</button>
         )}

         <Link to={`/detail/${id}`}>
            <h2 className={styles.nameCard}>{name}</h2>
         </Link>

         <img className={styles.imgCard} src={image} alt="" />

         <h2 className={styles.typeCard}>Species: {species}</h2>

         <h2 className={styles.descriptionCard}>Gender: {gender}</h2>
         
      </div>
   );
}

function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps,null)(Card);