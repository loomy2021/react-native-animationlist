import {s} from "./ListItem.style";
import {Image} from "react-native";
export function ListItem({item, index, screenWidth}) {
 //console.log(screenWidth)
 return <Image source={item.picture} style={s.itemImage}  ></Image>

} // List