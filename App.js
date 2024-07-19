import {s} from "./App.style";
import {  Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {Dimensions, LogBox} from "react-native";
import {List} from "./components/List/List";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {useSharedValue} from "react-native-reanimated";

export default function App() {



    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;



  return (
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <List screenWidth={screenWidth} screenHeight={screenHeight} />
            </GestureHandlerRootView>
          {/*<View  style={{flex: 1, width:SCREEN_W}} >*/}


          {/*</View>*/}
        </SafeAreaView>
      </SafeAreaProvider>


  );
}
