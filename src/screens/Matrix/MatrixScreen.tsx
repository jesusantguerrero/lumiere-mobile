import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useTaskFirestore } from "../../utils/useTaskFirestore";
import { SHADOWS, COLORS, SIZES, images } from "../../config/constants";
import AppHeader from '../../components/AppHeader';
import AuthContext from '../../utils/AuthContext';

export default function MatrixScreen({ navigation }) {
  const { extraData } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={{
          marginTop: 100,
          paddingBottom: 30,
      }}>
      </View>
    </View>
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
     ...SHADOWS.shadow1
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.gray[400],
  },
});
