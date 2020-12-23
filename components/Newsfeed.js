import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import axios from 'axios';
import ArticleBlurb from './ArticleBlurb';

const STORAGE_KEY = '@save_articles'

const Newsfeed = props => {
  const [articles, setArticles] = useState([])
  const APIKEY = 'baa10bc9380d4021a1753561dffb35e6'

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
    // clearStorage()

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

    if (props.searchTerm) {
      axios.get(`http://newsapi.org/v2/everything?q=${props.searchTerm}&from=2020-11-23&sortBy=publishedAt&apiKey=${APIKEY}`)
      .then(res => {
        const articleList = res.data['articles'];
        saveData(articleList)
      }).catch(e => console.log(e))
    } else if (!articles.length > 0) {
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`)
      .then(res => {
        const articleList = res.data['articles'];
        saveData(articleList)
      }).catch(e => console.log(e))
    }
  }, [props.searchTerm, setArticles])

  return (
    <View style={{...styles.newsfeed, ...props.style}}>
      <FlatList 
        keyExtractor={(item, index) => item.url}
        data={articles} 
        renderItem={itemData => 
          <ArticleBlurb 
            title={itemData.item.title} 
            description={itemData.item.description} 
            photo={itemData.item.urlToImage}
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
    marginTop: 16,
  }
});

export default React.memo(Newsfeed)