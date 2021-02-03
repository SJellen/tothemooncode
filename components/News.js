import React, {useContext, useState} from 'react'
import {Context} from '../context/Context'
import styles from '../styles/News.module.css'

export default function News(){
    const {gamestopNews, sourceCleaner, truncateNewsSummary, dateTimeConverter} = useContext(Context)
    const newsArr = gamestopNews && gamestopNews.slice(0,20)


    const newsTile = newsArr && newsArr.map(stock => 
            <div className="card" className={styles.cardBox}  key={stock.id}>
           
                <div style={{display: stock.image !== "null" ? "block" : "none", backgroundColor: "white"}}>
                    <img src={`${stock.image}`} className="card-img-top" alt="news image" />
                </div>
                
            
               
                <div className="card-body">
                <h5 className="card-title" className={styles.headline}>{stock.headline}</h5>
                <p className="card-text" className={styles.summary}>{truncateNewsSummary(stock.summary)}</p>
                <div className={styles.dateButtonBox}>
                    <a href={stock.url} className="btn btn-primary">{sourceCleaner(stock.source)}</a><span className={styles.date}>{dateTimeConverter(stock.datetime)}</span>
                </div>  
            </div>
            </div>
    )

    return (
         <div className="container-md" className={styles.container} id="news">
            <h2 className="text-center">Latest News 📰</h2>
                <div className="row align-items-center" className={styles.cardContainer}>
                {newsTile} 
                </div>
        </div>
    )
}