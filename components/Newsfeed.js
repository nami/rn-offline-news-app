import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import axios from 'axios';
import ArticleBlurb from './ArticleBlurb';
import useConnectInfo from './useConnectInfo';

const STORAGE_KEY = '@save_articles'
const APIKEY = 'xxx'

const Newsfeed = props => {
  const [articles, setArticles] = useState([])
  const netInfo = useConnectInfo()

  const readData = async () => {
    try {
      const savedArticles = await AsyncStorage.getItem(STORAGE_KEY)

      if (savedArticles !== null) {
        setArticles(JSON.parse(savedArticles))
      }
    } catch (e) {
      console.log('Failed to fetch the data from storage')
    }
  }

  const saveData = async (obj) => {
    clearStorage()

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
      setArticles(obj)
      console.log('Data successfully saved')
    } catch (e) {
      console.log('Failed to save the data to the storage')
    }
  }

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      console.log('Storage successfully cleared!')
    } catch (e) {
      console.log('Failed to clear the async storage.')
    }
  }

  useEffect(() => {
    readData()
    if (!props.isConnected) return

    if (props.searchTerm) {
      axios.get(`https://gnews.io/api/v4/search?q=${props.searchTerm}&token=${APIKEY}`)
      .then(res => {
        const articleList = res.data['articles'];
        saveData(articleList)
      }).catch(e => console.log(e))
    } else {
      axios.get(`https://gnews.io/api/v4/top-headlines?token=${APIKEY}`)
      .then(res => {
        const articleList = res.data['articles'];
        saveData(articleList)
      }).catch(e => console.log(e))
    }
  }, [props.searchTerm, setArticles, props.isConnected])

  return (
    <View style={styles.newsfeed}>
      <FlatList 
        keyExtractor={(item, index) => item.url}
        data={articles} 
        renderItem={itemData => 
          <ArticleBlurb 
            title={itemData.item.title} 
            description={itemData.item.description} 
            photo={itemData.item.image}
            content={itemData.item.content}
            url={itemData.item.url}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  newsfeed: {
    flex: 1,
    marginVertical: 16,
  }
});

export default React.memo(Newsfeed)