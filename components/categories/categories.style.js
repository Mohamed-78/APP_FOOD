import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderText:{
        marginTop: 5,
        color: COLORS.tertiare,
        fontSize: 14
    },
    categoriesContainer: {
        padding: 25,
    },
    categorieCercle:{
        width: 70,
        height: 70,
        borderRadius: 35, // La moitié de la largeur/hauteur pour obtenir un cercle parfait
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles;