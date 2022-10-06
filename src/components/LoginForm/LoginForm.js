import React from "react";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import {styles} from "./styles";

const LoginForm = ({email, handleInputEmail, handleInputPassword, password, login}) => {

    return (
        <div style={styles.loginFormContainer}>
            <h2 style={styles.registerText}>Registro</h2>
            <input style={styles.inputContainer} placeholder={'Introduce tu email'} value={email} onChange={handleInputEmail} type="email"/>
            <input style={styles.inputContainer} placeholder={'Introduce tu contraseña'} value={password} onChange={handleInputPassword} type="password"/>
            <div style={styles.forgetPasswordContainer}>
                <span style={styles.forgetPasswordText}>¿Has olvidado tu contraseña?</span>
            </div>
            <div style={styles.buttonContainer}>
                <ButtonSecondary buttonTitle={'Empezar'} onClick={login}/>
            </div>
        </div>
    )

}

export default LoginForm
