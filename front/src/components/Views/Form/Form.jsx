import styles from './Form.module.css';
import { useState } from 'react';
import validation from './validation';

export default function Form(props) {

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
            ...userData, [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(userData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            props.login(userData);
        } else {
            alert("Debe llenar todos los campos");
            setErrors(validationErrors);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label htmlFor='username'>
                    Username
                </label>
                <input className={errors.username && 'warning'} name='username' type="text" value={userData.username} onChange={handleInputChange}>
                </input>
                <p>{errors.username}</p>
                <label htmlFor='password'>
                    Password
                </label>
                <input className={errors.password && 'warning'} name='password' type="password" value={userData.password} onChange={handleInputChange}>
                </input>
                <p>{errors.password}</p>
                <button type='submit'>LOGIN</button>
            </form>
        </div>
    )
}