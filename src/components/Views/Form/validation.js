export default function validation(inputs){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};

    if(!inputs.email){
        errors.email = "Ingrese un email."
    }
    if(!regexEmail.test(inputs.email)){
        errors.email = "Debe ser un correo electronico.";
    }
    if(inputs.email.length > 35){
        errors.email = "El email no puede tener mas de 35 caraceteres."
    }
    if(!inputs.password){
        errors.password = "Ingrese contraseña";
    }
    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = "La contraseña debe ser entre 6 y 10 caracteres."
    }
    return errors;
}