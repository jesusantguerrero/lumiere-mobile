import React, {  } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
        <View style={{ borderRadius: 100, backgroundColor: "red", width: 50, height: 50, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
            <Text style={{ color: "white" }}> Home </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
