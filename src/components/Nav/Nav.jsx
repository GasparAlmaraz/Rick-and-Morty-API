import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import { NavLink } from "react-router-dom";

export default function Nav(props){
    return (
    <div className={styles.container}>
        <button onClick={props.logout}>LOG OUT</button>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cards'>Cards</NavLink>
        <NavLink to='/about'>About</NavLink>
        <SearchBar onSearch={props.onSearch}/>
    </div>
    );
}