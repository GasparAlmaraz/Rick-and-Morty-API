import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ id, name, species, gender, image, onClose }) {

   return (
      <div className={styles.divCard}>
         <button className={styles.buttonCard} onClick={()=>onClose(id)}>X</button>

         <Link to={`/detail/${id}`}>
            <h2 className={styles.nameCard}>{name}</h2>
         </Link>

         <img className={styles.imgCard} src={image} alt="" />

         <h2 className={styles.typeCard}>Species: {species}</h2>

         <h2 className={styles.descriptionCard}>Gender: {gender}</h2>
         
      </div>
   );
}
