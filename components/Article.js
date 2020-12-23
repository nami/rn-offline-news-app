import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Article = props => {
  return (
    <View style={{...styles.article, ...props.style}}>
    </View>
  )
}

const styles = StyleSheet.create({
  article: {
  }
});

export default Article