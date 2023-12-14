import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        overflow: "hidden",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderElement:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    sliderImg:{
        width: 340,
        height: 340,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        borderColor: COLORS.primary,
        borderWidth: 0.5,
    },
    textContentCard: {
        // justifyContent: 'center',
        // alignItems: 'center',
        position: "absolute",
        top: "60%",
        width: "90%",
        height: "33%",
        backgroundColor: "#FBFBFB",
        elevation: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        shadowColor: "rgba(0, 0, 0, 0.11)",
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 10
    },
    sliderText:{
        color: COLORS.tertiare,
        fontWeight: "bold",
        fontSize: 20
    },
    ratingElement:{
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    ratingSize:{
        marginLeft: "-3.5%",
        marginTop: "-6%",
        width: "35%"
    },
    totalReviews:{
        paddingHorizontal: 10,
        marginTop: "2%",
        color: "gray"
    },
    reviews:{
        marginTop: "2%",
        color: "#ffbd3b"
    },
    elementPosition:{
        marginTop: "-3%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconWithText:{
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    icon:{
        width: 20,
        height: 20
    },
    iconText:{
        paddingHorizontal: 3,
        fontSize: 14,
    }
})

export default styles;