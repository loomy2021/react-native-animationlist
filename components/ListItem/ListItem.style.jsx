import { StyleSheet } from 'react-native';
const IMG_H = 350;
export const IMAGE_SIZE = {
    MAX: 300,
    MIN: 100,


}
export const s = StyleSheet.create({
    itemImage: {
        width: '100%',
         height:IMAGE_SIZE.MAX,
    },
    txtContainer:{
        backgroundColor: "#0000003a",
        position: "absolute",
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",

    },
    txtTitle: {
        color: "white",
        fontSize: 30,

    },
    txtSubtitle: {
        color: "white",
        fontSize: 20,

    }
});