import styles from './Form.module.css';
import { useState } from 'react';
import validation from './validation';

export default function Form(){

    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = useState({
        username: '', 
        password: '' 
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData, [event.target.name] : event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errorsArray = Object.values(errors);
        if (errorsArray.length === 0) {
          alert("Datos completos");
          
          setUserData({ username: "", password: ""});
          setErrors(validation({ email: "", password: ""}));
        } else {
          alert("Debe llenar todos los campos");
        }
      }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <label htmlFor='username'>
                Username 
            </label>
            <input className={errors.username && 'warning'} name='username' type="text" value={userData.username} onChange={handleInputChange}>
            </input>
            <p className='danger'>{errors.username}</p>
            <label htmlFor='password'>
                Password 
            </label>
            <input className={errors.password && 'warning'} name='password' type="password" value={userData.password} onChange={handleInputChange}>
            </input>
            <p className='danger'>{errors.password}</p>
            <button type='submit'>LOGIN</button>
        </form>
    )
}