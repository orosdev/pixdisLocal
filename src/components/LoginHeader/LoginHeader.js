import React from "react";
import Logo from "../../assets/logos/logo-pixdis.png";
import {colors} from "../../theme/colors";
import {styles} from "./styles";

const LoginHeader = () => {

    return (
        <>
            <img src={Logo} style={styles.imageLogo} alt="Logo de Pixdis"/>
            <h1 style={styles.title} >¡Te damos la bienvenida!</h1>
        </>
    )

}

export default LoginHeader
