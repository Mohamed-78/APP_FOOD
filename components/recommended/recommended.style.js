import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    sliderElement:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    sliderImg:{
        width: 150,
        height: 150,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        // borderColor: COLORS.primary,
        borderWidth: 0.5,
    },
    textContent: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    sliderText:{
        color: COLORS.tertiare,
        fontSize: SIZES.medium,
        fontWeight: "bold",
    },
    sliderPrice:{
        color: COLORS.tertiare,
        fontSize: SIZES.medium,
    },
})

export default styles;