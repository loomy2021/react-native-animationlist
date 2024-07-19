import {IMAGE_SIZE, s} from "./ListItem.style";
import {Image, Text, TouchableOpacity, View} from "react-native";
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


 const txtTitleAnimStyle = useAnimatedStyle(()=>
     {const fontSize = interpolate(
         scrollY.value,
         [index*IMAGE_SIZE.MAX, index*IMAGE_SIZE.MAX - IMAGE_SIZE.MAX ],
         [30, 0],
         Extrapolate.CLAMP
     )
      return {
       fontSize: fontSize
      }
     }

 );

 const txtSubtitleAnimStyle = useAnimatedStyle(()=>
     {
      const fontSize = interpolate(
         scrollY.value,
         [index*IMAGE_SIZE.MAX, index*IMAGE_SIZE.MAX - IMAGE_SIZE.MAX ],
         [20, 0],
         Extrapolate.CLAMP
     )
      const opacity = interpolate(
          scrollY.value,
          [index*IMAGE_SIZE.MAX, index*IMAGE_SIZE.MAX - IMAGE_SIZE.MAX ],
          [1,0 ],
          Extrapolate.CLAMP
      )
      return {
       fontSize: fontSize, opacity: opacity
      }
     }

 );



 return(
 <TouchableOpacity onPress={()=>alert('you clicked')}>
  <Animated.Image source={item.picture} style={[s.itemImage, imgAnimStyle ]}  ></Animated.Image>
  <View style={s.txtContainer}>
   <Animated.Text style={[s.txtTitle, txtTitleAnimStyle,]}>{item.title} </Animated.Text>
   <Animated.Text style={[s.txtTitle, txtSubtitleAnimStyle,]}>{item.subtitle} </Animated.Text>
  </View>

</TouchableOpacity>
 )
} // List