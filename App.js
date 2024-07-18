import {s} from "./App.style";
import {  Text, View } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView >
          <View style={s.container} >
            <Text style={s.txt}>123</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>


  );
}
