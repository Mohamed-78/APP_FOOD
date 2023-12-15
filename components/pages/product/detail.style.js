import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f4f4f4"
    },
    buttonCercle:{
        width: 45,
        height: 45,
        borderRadius: 35,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    actionButton:{
        paddingHorizontal: "5%",
        marginTop: "-35%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textContentCard: {
        // justifyContent: 'center',
        // alignItems: 'center',
        position: "absolute",
        top: "70%",
        left: "5%",
        right: "5%",
        width: "90%",
        height: "55%",
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
        fontSize: 24
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
        marginTop: "0.5%",
        color: "gray"
    },
    reviews:{
        marginTop: "0.5%",
        color: "#ffbd3b"
    },
    elementPosition:{
        gap: 10,
        marginTop: "-3%",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    iconWithText:{
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    icon:{
        width: 17,
        height: 17
    },
    iconText:{
        paddingHorizontal: 3,
        fontSize: 14,
    },
    secondHorizontalLine: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        // marginBottom: 15,
        backgroundColor: "#CCD7E1",
        alignSelf: "center",
        width: "85%",
        height: 1,
    },
    afterHorizontalLine: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    element: {
        gap: 7,
        // width: "40%",
        // margin: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "gray",
        fontSize: 13,
        flexDirection: "row",
        alignSelf: "center"
    },
    recommandedContainer: {
        height: "50%",
        padding: 25,
    },
    recommandedElement:{
        top: "20%",
        position: "relative"
    },
    commentsElement:{
        padding: 25,
    },
    recommandedText:{
        marginBottom: "5%",
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default styles;