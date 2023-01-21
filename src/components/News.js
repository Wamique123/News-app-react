import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
const News = () => {
  const [articles, setArticles] = useState([])
const [page, setPage] = useState(1)

  const updateNews = async()=>{
    const url = "https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=9c08b0265bea4dbdbb7828b3694ce749&page=1"
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    console.log(parsedData)
  }
  useEffect(() => {
  updateNews()
 
  }, [])
  
 const handlePrevClick = async()=>{
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=9c08b0265bea4dbdbb7828b3694ce749&page=${page-1}`
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles)
  setPage(page-1)
 }
 const handleNextClick = async()=>{
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=9c08b0265bea4dbdbb7828b3694ce749&page=${page+1}`
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles)
  setPage(page+1)
 }
 
 

  return (
 
      <div className="container my-4">
        <h2 className='text-center'>News Api </h2>
       
        <div className="row">
        
        {articles.map((element)=>{  
         return <div className="col-md-4 my-3" key={element.url}>
           <Newsitem title={element.title?element.title.slice(0,45): ""} description={element.description?element.description.slice(0,60):".."} imageUrl={element.urlToImage} newsUrl={element.url}/>
           </div>
              })}
             </div>
        <div className="container d-flex justify-content-between">
        <button disabled={page<=1}type="button" className="btn btn-dark" onClick={handlePrevClick}>previous</button>
        <button type="button" className="btn btn-dark" onClick={handleNextClick}>back</button>
        </div>
        </div>
  
  )
}

export default News