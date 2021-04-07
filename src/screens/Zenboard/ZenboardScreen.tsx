import React, {  useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { images, SIZES, FONTS, COLORS } from "../../config/constants";
import AppHeader from '../../components/AppHeader';
import AuthContext from '../../utils/AuthContext';
import { LinearGradient } from "expo-linear-gradient";
import { ZenboardScreenProps } from "../../navigators/main"

export default function ZenboardScreen( { navigation }: ZenboardScreenProps ) {
  const { extraData } = useContext(AuthContext);

  return (
    <ImageBackground source={images.temple} style={styles.container}>
      <LinearGradient
        colors={['rgba(58, 74, 115, .5)', 'rgba(58, 74, 115, .8)', COLORS.primary ]}
        locations={[0, 0.5, 0.7]}
        style={{
          width: '100%', 
          height: '100%',
          position: 'absolute'
        }}
      />
      <AppHeader navigation={navigation} user={extraData}></AppHeader>
      <View style={{width: '100%', paddingHorizontal: SIZES.padding, paddingBottom: SIZES.padding }}>
        <Text style={{...FONTS.h3, color: 'white', fontWeight: 'bold'}}>Welcome, { extraData?.displayName || extraData?.email }</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    tintColor: "#000"
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 20,
    width: "100%"
  },
  button: {
    width: 100,
    minWidth: "48%",
    color: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    fontSize: 36
  },
  header: {
    backgroundColor: "red",
    borderBottomColor: "#333",
    borderBottomWidth: 2,
    height: 40,
    fontSize: 24,
    width: "100%"
  }
});
