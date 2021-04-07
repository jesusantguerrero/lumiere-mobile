import "react-native-gesture-handler"
import React, { useState, useEffect } from 'react';
import { StatusBar } from "expo-status-bar"
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from "@react-navigation/native";
import { decode, encode } from "base-64";
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import { firebase } from "./src/utils/useFirebase";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import HomeNavigator from "./src/navigators/home";
import AuthNavigator from "./src/navigators/auth";
import {useFonts, Roboto_400Regular, Roboto_900Black, Roboto_700Bold } from "@expo-google-fonts/roboto"
import AuthContext from "./src/utils/AuthContext";

export default function App() {
  const [isLoading, setIsLoading ] = useState(true);
  const [user, setUser] = useState<firebase.User|null>(null); 
  // LogBox.ignoreLogs(['Setting a timer']);
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,
    Roboto_700Bold,
    'Potta_One': require('./src/assets/fonts/PottaOne-Regular.ttf'),
  })

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        setUser(user)
        setIsLoading(false);
      } else {
        setUser(null)
        setIsLoading(false)
      }
    })
  }, [])


  if (!fontsLoaded || isLoading) {	
    return (	
      <></>	
    )	
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
        <StatusBar
          animated={true}
          translucent={true}
          style='inverted'
        />
        <AuthContext.Provider value={{ extraData: user }}>
          <AppearanceProvider>
            <NavigationContainer>
                { user ? <HomeNavigator></HomeNavigator> : <AuthNavigator></AuthNavigator>}
            </NavigationContainer>
          </AppearanceProvider>
        </AuthContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}