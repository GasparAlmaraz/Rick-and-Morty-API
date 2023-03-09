import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'

export default function Nav(props){
    return (
    <div className={styles.container}>
        <span className={styles.searchTitle} >Buscador de Personajes</span>
        <SearchBar onSearch={props.onSearch}/>
    </div>
    );
}