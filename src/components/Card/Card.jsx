import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.divCard}>
         <button className={styles.buttonCard} onClick={props.onClose}>X</button>

         <h2 className={styles.nameCard}>{props.name}</h2>

         <img className={styles.imgCard} src={props.image} alt="" />

         <h2 className={styles.typeCard}>{props.species}</h2>

         <h2 className={styles.descriptionCard}>{props.gender}</h2>
         
      </div>
   );
}
