import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const s = StyleSheet.create({
    scrollview: {
        flex:1,
        width: windowWidth,
    }
})