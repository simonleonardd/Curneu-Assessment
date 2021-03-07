import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import EmployeeDetails from './EmployeeDetails';
// import axios from 'axios'; 

export default function App() {
  return (
    <ScrollView>
      <View>
    {/* <View style={styles.container}> */}
      <EmployeeDetails></EmployeeDetails>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});