import React, { useState, useEffect } from 'react'
import getNews from '../../services/getNews'
import NewsCard from '../NewsCard'

export default function NewsList() {
  const [news, setNews] = useState([])

  useEffect(() => {
    getNews().then(setNews)
  }, [])

  return news.map(currentNews => (
    <NewsCard key={currentNews.NewsID} {...currentNews} />
  ))
}
