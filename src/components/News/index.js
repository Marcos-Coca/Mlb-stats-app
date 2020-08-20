import React, { useState, useEffect } from 'react'
import getNews from 'Services/getNews'
import NewsCard from 'Components/News/NewsCard'

export default function NewsList() {
  const [news, setNews] = useState([])

  useEffect(() => {
    getNews().then(setNews)
  }, [])

  return (
    <section style={{ background: '#fff' }}>
      {news.map(currentNews => (
        <NewsCard key={currentNews.NewsID} {...currentNews} />
      ))}
    </section>
  )
}
