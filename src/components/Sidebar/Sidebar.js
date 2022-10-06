import React from "react";
import {styles} from './styles';
import {useNavigate} from "react-router-dom";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import DashboardIcon from "../../assets/icons/icon-dashboard.png";
import DocumentIcon from "../../assets/icons/icon-document.png";
import SettingsIcon from "../../assets/icons/icon-settings.png";
import LogoutIcon from "../../assets/icons/icon-logout.png"
import SidebarNavigator from "../SidebarNavigator/SidebarNavigator";

const Sidebar = () => {

    const navigate = useNavigate();

    const goToEditProfile = () => {
        navigate('/edit-profile');
    }

    const goToShare = () => {
        navigate('/share');
    }

    const logout = () => {
        navigate('/login');
    }

    return (
        <div style={styles.sidebarContainer}>
           <div style={styles.container}>
               <div>
                   <SidebarProfile
                       name={'Rihanna'}
                       goTo={goToEditProfile}/>
                   <div style={styles.buttonContainer}>
                    <ButtonSecondary
                        buttonTitle={'Recomendar a un amigo'}
                        onClick={goToShare}/>
                   </div>
                   <div style={{marginTop: 48}}>
                       <SidebarNavigator onClick={() => {
                           console.log('Panel');
                       }} icon={DashboardIcon} titleRoute={'Panel de tickets'}/>
                   </div>
                   <div>
                       <SidebarNavigator onClick={() => {
                           console.log('Facturacion');
                       }} icon={DocumentIcon} titleRoute={'Facturación'}/>
                   </div>
               </div>
               <div>
                   <SidebarNavigator onClick={() => {
                       console.log('Ajustes');
                   }} icon={SettingsIcon} titleRoute={'Ajustes'}/>
                   <SidebarNavigator onClick={() => {
                       logout();
                   }} icon={LogoutIcon} titleRoute={'Cerrar sesión'}/>
               </div>
           </div>
        </div>
    )
}

export default Sidebar;
