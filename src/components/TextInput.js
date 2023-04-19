import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextEntryComponent = ({ value, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      editable={false}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default TextEntryComponent;