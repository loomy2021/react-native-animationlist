import {s} from "./List.style";
import {ScrollView} from "react-native";
import {IMAGES} from "../../constant";
import {ListItem} from "../ListItem/ListItem";
import Animated, {useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";
import {IMAGE_SIZE} from "../ListItem/ListItem.style";

export function List(screenWidth) {
    //console.log(screenWidth.screenH )
    const screenHeight = screenWidth.screenH;
    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(
        {
            onScroll:(e)=> {
                scrollY.value = e.contentOffset.y;
            }
        }
    )



    return( <Animated.ScrollView style={s.scrollview} onScroll={scrollHandler} scrollEventThrottle={16} contentContainerStyle={{height: IMAGES.length * IMAGE_SIZE.MAX  }} >
            {IMAGES.map((item, index) => (
                <ListItem key={index} item={item} screenWidth={screenWidth.screenH} scrollY={scrollY} index={index} />
            ))

            }
    </Animated.ScrollView>
    )

} // List