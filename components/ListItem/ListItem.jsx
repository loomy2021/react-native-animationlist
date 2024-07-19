import {IMAGE_SIZE, s} from "./ListItem.style";
import {Image} from "react-native";
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";

export function ListItem({item, index, screenWidth, scrollY}) {
 //console.log(screenWidth)
 const imgAnimStyle = useAnimatedStyle(()=>
 {const height = interpolate(
     scrollY.value,
 [index*IMAGE_SIZE.MAX, index*IMAGE_SIZE.MAX - IMAGE_SIZE.MAX ],
 [IMAGE_SIZE.MAX, IMAGE_SIZE.MIN],
 Extrapolate.CLAMP
 )
  return {
    height: height
  }
 }

 );
 return <Animated.Image source={item.picture} style={[s.itemImage, imgAnimStyle ]}  ></Animated.Image>

} // List