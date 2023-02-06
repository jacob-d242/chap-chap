import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export default function MainInput({label,...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
          <TextInput style={styles.textInput}  />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    marginTop: "8@s",
  },
    label: {
   // backgroundColor:'#EAFFFF',
    color:'#000000',
    fontSize: '13@s',
    fontFamily: 'Inter-Medium',
  },
  textInput: {
    marginTop: '10@s',
    borderColor: '#111',
    borderWidth: '1@s',
    borderRadius: '6@s',
    backgroundColor: '#FFFF',
    color: '#000000'
  },
});
