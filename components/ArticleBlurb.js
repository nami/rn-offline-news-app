import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const ArticleBlurb = props => {
  return (
    <View style={{...styles.blurb, ...props.style}}>
      <Image 
        style={styles.img}
        resizeMode='cover'
        source={{
          uri: `${props.photo}`
        }} 
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  blurb: {
    marginVertical: 16,
    marginHorizontal: 24,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 16,
    borderRadius: 10,
  },
  img: {
    height: 150,
    width: 345,
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  }
});

export default ArticleBlurb