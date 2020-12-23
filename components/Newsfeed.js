import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import ArticleBlurb from './ArticleBlurb';

const Newsfeed = props => {
  const [articles, setArticles] = useState([])
  const APIKEY = 'xxx'

  useEffect(() => {
    if (props.searchTerm) {
      axios.get(`http://newsapi.org/v2/everything?q=${props.searchTerm}&from=2020-11-23&sortBy=publishedAt&apiKey=${APIKEY}`)
      .then(res => {
        const articleList = res.data;
        setArticles(articleList['articles'])
      }).catch(e => console.log(e))
    } else {
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`)
      .then(res => {
        const articleList = res.data;
        setArticles(articleList['articles'])
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