import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f4f4f4"
    },
    firstHeight:{
        padding: 15,
        paddingVertical: "25%",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textHeader:{
        fontWeight: "bold",
        fontSize: 30,
        width: "60%",
        color: "#fff"
    },
    iconSearch:{
        marginTop: "5%"
    },
    cardsContainer: {
        padding: 25,
    },
    categoriesContainer: {
        padding: 20,
    },
    secondHorizontalLine: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: "#CCD7E1",
        alignSelf: "center",
        width: "85%",
        height: 1,
    },
  
})

export default styles;