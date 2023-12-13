import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    titleDisplay:{
        marginBottom: "2%",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingHorizontal: "8%",
        gap: 10
    },
    popularText:{
        fontSize: 21,
        fontWeight: "bold"
    },
    positionTitle:{
        fontSize: 14,
        paddingVertical: "2%",
        color: "gray"
    },
    productsContainer:{
        marginBottom: "3%",
        flexDirection: "row",
        justifyContent: "center"
    },
    cardContainer:{
        width: "85%",
        height: "100%",
        backgroundColor: "#FBFBFB",
        elevation: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        shadowColor: "rgba(0, 0, 0, 0.11)",
        borderRadius: 8,
        backgroundColor: 'white',
    },
    cardImage:{
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    card:{
        padding: 15,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    cardTitle:{
        fontSize: 16,
        fontWeight: "500",
    },
    cardSubTitle:{
        marginTop: "1%",
        width: "55%",
        color: "gray",
    },
    cardContent:{
        paddingHorizontal: "3%",
    },
    elementPosition:{
        marginTop: "4%",
        paddingHorizontal: "-10%",
        paddingVertical: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    iconWithText:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    icon:{
        width: 15,
        height: 15
    },
    iconText:{
        paddingHorizontal: 3,
        fontSize: 13,
    },
    productTitlePosition:{
        flexDirection: "row",
        alignItems: "center",
    },
    reviewElement: {
        position: "absolute",
        top: 0,
        left: "45%",
        flexDirection: "row",
        alignItems: "center",
    },
    reviewTitle:{
        color: "#ffbd3b"
    }
})

export default styles;