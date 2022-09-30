import React from "react";
import FakeProfileImage from "../../assets/profileImage/fake-profile.jpeg";
import IconEdit from "../../assets/icons/icon-edit.png";
import {styles} from "./styles";

const SidebarProfile = ({goTo, name}) => {
    return (
        <div style={styles.profileContainer}>
            <div style={styles.imageContainer}>
                <img style={styles.image} src={FakeProfileImage} alt="Foto de perfil"/>
                <span style={styles.name}>{name}</span>
            </div>
            <button onClick={goTo} style={styles.buttonContainer}>
                <img src={IconEdit} alt="Icono de editar perfil"/>
            </button>
        </div>
    )
}

export default SidebarProfile;
