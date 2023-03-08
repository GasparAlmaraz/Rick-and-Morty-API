import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   return (
      <div>
         <input className={styles.search} type='search' />
         <button className={styles.button} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
