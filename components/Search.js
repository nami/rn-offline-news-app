import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Search = props => {
  return (
    <View style={{...styles.search, ...props.style}}>
      <TextInput />
    </View>
   )
}

const styles = StyleSheet.create({
  search: {
    width: 300,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 16,
    padding: 8
  }
});

export default Search