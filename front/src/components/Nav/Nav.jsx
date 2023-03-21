import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import { NavLink } from "react-router-dom";

export default function Nav(props){
    return (
    <div className={styles.container}>
        <button onClick={props.logout}>LOG OUT</button>
        <NavLink to='/cards'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <SearchBar onSearch={props.onSearch}/>
    </div>
    );
}