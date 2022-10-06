import {colors} from "../../theme/colors";

export const styles = {
    loginFormContainer: {
        display: "flex",
        flexDirection: "column",
        width: '100%'
    },
    registerText: {
        color: '#0B0B0B',
        fontSize: 18,
        marginBottom: 24
    },
    inputContainer: {
        border: "none",
        outline: "none",
        borderBottom: '1px solid #DCDCDC',
        height: 44,
        width: '100%',
        marginBottom: 24
    },
    forgetPasswordContainer: {
        width: '100%',
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 14
    },
    forgetPasswordText: {
        color: colors.primary,
        cursor: "pointer"
    },
    buttonContainer: {
        marginTop: 60
    }
}
