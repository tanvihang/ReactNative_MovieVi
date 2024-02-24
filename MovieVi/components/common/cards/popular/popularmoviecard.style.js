import { StyleSheet } from "react-native";

import {COLORS} from "../../../../constants/index"

const styles = StyleSheet.create({
    container:(selectedMovie, item)=>({
        width:250,
        padding: SIZES.xLarge,
        backgroundColor: selectedMovie == item.imdb_id? COLORS.primary:"#FFF",
        borderRadius: SIZES.medium,
        justifyContent: "space-between",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    })
})

export default styles;