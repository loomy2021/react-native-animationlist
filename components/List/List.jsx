import {s} from "./List.style";
import {ScrollView} from "react-native";
import {IMAGES} from "../../constant";
import {ListItem} from "../ListItem/ListItem";

export function List(screenWidth) {
    return( <ScrollView style={s.scrollview}>
            {IMAGES.map((item, index) => (
                <ListItem key={index} item={item} screenWidth={screenWidth} />
            ))

            }
    </ScrollView>
    )

} // List