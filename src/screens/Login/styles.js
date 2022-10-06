import {colors} from "../../theme/colors";

export const styles = {
    screenContainer: {
        height: '100vh',
        width: '100vw',
        backgroundColor: colors.primary,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer: {
        backgroundColor: 'white',
        boxSizing: "border-box",
        overflow: "auto",
        minWidth: 1200,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 16,
        display: "flex",
        justifyContent: "center"
    },
    mainContainer: {
        height: '100%',
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 380,
        marginTop: 62,
        marginBottom: 180
    }

}
