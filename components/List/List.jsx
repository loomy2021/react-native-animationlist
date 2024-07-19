import {s} from "./List.style";
import {ScrollView} from "react-native";
import {IMAGES} from "../../constant";
import {ListItem} from "../ListItem/ListItem";
import Animated, {useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";

export function List(screenWidth) {

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(
        {
            onScroll:(e)=> {
                scrollY.value = e.contentOffset.y;
            }
        }
    )



    return( <Animated.ScrollView style={s.scrollview} onScroll={scrollHandler} scrollEventThrottle={16}>
            {IMAGES.map((item, index) => (
                <ListItem key={index} item={item} screenWidth={screenWidth} scrollY={scrollY} index={index} />
            ))

            }
    </Animated.ScrollView>
    )

} // List