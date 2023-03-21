import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

   const [id, setID] = useState("");

   const handleChange = (event) => {
      setID(event.target.value);
   }

   return (
      <div>
         <span className={styles.searchTitle} >Buscador de Personajes</span>
         <input className={styles.search} type='search' onChange={handleChange}/>
         <button className={styles.button} onClick={()=> onSearch(id)}>Agregar</button>
      </div>
   );
}
