import {s} from "./App.style";
import {  Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {Dimensions, LogBox} from "react-native";

export default function App() {

    const {width: SCREEN_W, height: SCREEN_HEIGHT} = Dimensions.get("screen");


  return (
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <View  >
            <Text style={s.txt}>Hello World!</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>


  );
}
