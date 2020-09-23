import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const ToDoForm = ({textform, value, handleText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={(text) => handleText(text)}
        maxLength={textform.maxlength}
        multiline={textform.multilane}
        numberOfLines={textform.linesnumber}
        autoCorrect={textform.autocorrect}
        returnKeyType={textform.keytype}
        textAlignVertical="top"
        autoCapitalize="none"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 10,
    padding: 5,
    backgroundColor: '#FDFCE1',
  },
});
export default ToDoForm;
