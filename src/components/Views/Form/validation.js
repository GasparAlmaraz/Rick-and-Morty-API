export default function validation(inputs){
    const regexusername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexInt = /\d/;
    let errors = {};

    if(!inputs.username){
        errors.username = "Ingrese un username."
    }else
    if(!regexusername.test(inputs.username)){
        errors.username = "Debe ser un correo electronico.";
    }else
    if(inputs.username.length > 35){
        errors.username = "El username no puede tener mas de 35 caraceteres."
    }
    if(!inputs.password){
        errors.password = "Ingrese contraseña";
    }else
    if (!regexInt.test(inputs.password)) {
        errors.password = "La contraseña debe contener al menos un número";
    }else
    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = "La contraseña debe ser entre 6 y 10 caracteres."
    }
    return errors;
}