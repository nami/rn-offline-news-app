import React from 'react';
import { StyleSheet, Text, View, Modal, Image, Button } from 'react-native';

const Article = props => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.article}>
        <View style={styles.buttonContainer}>
          <Button color="gray" title="X" onPress={() => props.close(false)} />
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <Image 
          style={styles.img}
          resizeMode='cover'
          source={{
            uri: `${props.photo}`
          }} 
        />
        <Text>{ props.content }</Text>
        <Text style={styles.content}>Read more:</Text>
        <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL(`${props.url}`)}>
          {props.url}
        </Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  article: {
    flex: 1, 
    marginTop: 64,
    marginHorizontal: 36
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginBottom: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16
  },
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 16
  },
  content: {
    marginTop: 16,
  }
});

export default Article