import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { SHADOWS, COLORS, SIZES, images } from "../../config/constants";
import AppHeader from '../../components/AppHeader';
import AuthContext from '../../utils/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

export default function MetricsScreen({ navigation }) {
  const { extraData } = useContext(AuthContext);

  const [ todo, setTodo ] = useState([]);


  const MatrixHeader = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 210,
          position: 'relative'
        }}
      >
        <ImageBackground source={images.temple} style={styles.containerHeader}>
        <LinearGradient
          colors={['rgba(58, 74, 115, .5)', 'rgba(58, 74, 115, .8)' ]}
          locations={[0, 0.5, 0.7]}
          style={{
            width: '100%', 
            height: '100%',
            position: 'absolute'
          }}
        />
        </ImageBackground>
        <AppHeader navigation={navigation} user={extraData}></AppHeader>
          <View style={{
            marginTop: 84,
            width: '100%',
            paddingHorizontal: SIZES.padding,
            position: 'absolute',
            elevation: 9,
            zIndex: 10,
            ...SHADOWS.shadow1
          }}>
            <Text style={{ color: 'white'}}> Metrics </Text>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignContent: 'space-around',
                backgroundColor: 'white',
                overflow: 'hidden',
                borderRadius: SIZES.radius,
                marginTop: 8
              }}
            >
             
                  <TouchableOpacity style={{
                    width: '33%',
                    height: 74,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => '' }
                  >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}> List </Text>
                  </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <MatrixHeader></MatrixHeader>
      <Text style={{ color: 'white', padding: SIZES.padding, paddingBottom: 0 }}> Guilds </Text>
      <View style={{
          padding: SIZES.padding,
      }}>
        <View
              style={{
                flexDirection: 'row',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignContent: 'space-around',
                backgroundColor: 'white',
                overflow: 'hidden',
                borderRadius: SIZES.radius,
                marginTop: 8
              }}
            >
              <TouchableOpacity style={{
                width: '33%',
                height: 74,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => ''}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}> List </Text>
              </TouchableOpacity>
        </View>
      </View>
      <Text style={{ color: 'white', paddingHorizontal: SIZES.padding }}> Stats </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
     ...SHADOWS.shadow1,
     marginBottom: 200
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.primary
  },
});
