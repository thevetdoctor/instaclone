import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    icon: {
        color: "#fff"
    },
    menuText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 15,
        textTransform: "uppercase"
    },
    menuRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15
    },
    menuTextBox: {
        flexGrow: 1
    },
    menuItems: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    arrowIcon: {
        color: "#4d4d4e"
    },
    subTitle: {
        color: "grey",
        marginLeft: 14,
        fontSize: 15
    }
});

export default styles;