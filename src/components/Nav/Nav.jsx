import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import { NavLink } from "react-router-dom";

export default function Nav(props){
    return (
    <div className={styles.container}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <span className={styles.searchTitle} >Buscador de Personajes</span>
        <SearchBar onSearch={props.onSearch}/>
    </div>
    );
}