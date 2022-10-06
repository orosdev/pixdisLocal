import React, { useState } from "react";
import { styles } from './styles';
import AddTicketIcon from '../../assets/icons/icon-new-ticket.png';
import { useNavigate } from "react-router-dom";
import AlertButton from "../AlertButton/AlertButton";
import AddProfileButton from "../AddProfileButton/AddProfileButton";
import ProfileSelector from "../ProfileSelector/ProfileSelector";
import FolderIcon from "../../assets/icons/icon-blue-folder.png";

const Header = () => {

    const navigate = useNavigate();

    const goToAddTicket = () => {
        navigate('/new-ticket');
    };

    const goToAddProfile = () => {
        navigate('/add-profile');
    };

    const [profiles, setProfiles] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState('');

    const onSelectProfile = (id) => {
        setSelectedProfile(id);
    }

    return (
        <div style={styles.headerContainer}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: 20 }}>
                    <ProfileSelector
                        selectedProfile={selectedProfile}
                        listProfiles={profiles}
                        onSelectProfile={onSelectProfile} />
                </div>
                <AddProfileButton goTo={goToAddProfile} />
            </div>
            <div style={{ width: 236 }}>
                <AlertButton
                    buttonTitle={'Crear ticket'}
                    onClick={goToAddTicket}
                    icon={AddTicketIcon} />
            </div>
        </div>
    )
}

export default Header;
