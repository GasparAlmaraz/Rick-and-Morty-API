import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavCharacter, deleteCharacter } from '../../redux/action';
import { useState, useEffect } from 'react';

function Card({ id, name, species, gender, image, onClose, addFavorite, deleteFavorite, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         deleteFavorite(id);
      } else {
         addFavorite({ id, name, species, gender, image, onClose });
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

function mapDispatchToProps(dispatch){
   return {
      addFavorite: (character)=>dispatch(addFavCharacter(character)),
      deleteFavorite: (id)=>dispatch(deleteCharacter(id))
   }
}

function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);