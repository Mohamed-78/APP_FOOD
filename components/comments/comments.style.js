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
    },
    commentsContent:{
        marginTop: "5%",
    },
    justifyPosition:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    userImage:{
        width: 60,
        height: 60
    },
    flexStartElement:{
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    userNameAndRating:{
        
    },
    userName:{
        position: "relative",
        top: "10%",
        left: "20%",
        fontSize: 17,
        fontWeight: "bold"
    },
    dateComment:{
        marginTop: "5%",
    },
    iconsSize:{
        width: 90,
        height: 90,
        position: "absolute",
        left: "58%"
    }
});

export default styles;