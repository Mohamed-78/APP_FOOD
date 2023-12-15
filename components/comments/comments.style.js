import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginTop: "-22%",
        padding: 25,
    },
    secondHorizontalLine: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CCD7E1",
        alignSelf: "center",
        width: "100%",
        height: 1,
    },
    commentsText:{
        marginTop: "3%",
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default styles;