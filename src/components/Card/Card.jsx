import styles from './Card.module.css';

export default function Card({ id, name, species, gender, image, onClose }) {

   return (
      <div className={styles.divCard}>
         <button className={styles.buttonCard} onClick={()=>onClose(id)}>X</button>

         <h2 className={styles.nameCard}>{name}</h2>

         <img className={styles.imgCard} src={image} alt="" />

         <h2 className={styles.typeCard}>Species: {species}</h2>

         <h2 className={styles.descriptionCard}>Gender: {gender}</h2>
         
      </div>
   );
}
