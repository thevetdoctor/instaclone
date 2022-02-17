import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "orange"
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 10
    },
    headerTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        position: "absolute"
    },
    icon: {
        color: "#fff"
    },
    batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    batteryImage: {
        width: 70,
        height: 26,
        marginLeft: 12
    },
    batteryText: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    },
    status: {
        alignItems: "center"
    },
    statusText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    controls: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 175
    },
    controlButton: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 50,
        padding: 17,
        marginLeft: 25
    }
});

export default styles;