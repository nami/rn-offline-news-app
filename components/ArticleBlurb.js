import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Article from './Article';

const ArticleBlurb = props => {
   const [showArticle, setShowArticle] = useState(false)

  return (
    <View>
      <TouchableOpacity onPress={() => setShowArticle(true)}>
        <View style={styles.blurb}>
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
      </TouchableOpacity>
      <Article 
        visible={showArticle} 
        photo={props.photo} 
        content={props.content} 
        title={props.title} 
        url={props.url}
        close={setShowArticle}
      />
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
    width: 330,
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  }
});

export default ArticleBlurb