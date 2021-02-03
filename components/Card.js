import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../context/Context'
import styles from '../styles/Card.module.css'

export default function Card() {

    const {gamestop, amc, nok, baseUrl, apiKEYFH, quoteGenerator} = useContext(Context)
    const [bb, setBb] = useState([])
    const [koss, setKoss] = useState([])
    const stockArr = [gamestop, amc,nok, bb, koss]

    const fetchSingleStockQuote = async (x) => {
        await fetch(`${baseUrl}quote?symbol=${x}&token=${apiKEYFH}`)
        .then(res => res.json())
        .then(data => 
                    x === 'BB' ? setBb(data) : 'KOSS' ? setKoss(data) : ''        
               )    
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchSingleStockQuote('BB')
        fetchSingleStockQuote('KOSS')
    }, [])


    const stockTile = stockArr.map((stock, index) => 

            <div className="card mx-4 my-4 " style={{width: "12rem", padding: '0'}} key={index} >
                <div className="card-header text-center bg-primary text-white" >
                    <div className={styles.titleBox}>
                        {index === 0 ? "GME Gamespot" : index === 1 ? "AMC" : index === 2 ? 'NOK Nokia' : index === 3 ? 'BB Blackberry' : 'KOSS'}
                   
                    </div>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item ">${stock.c} </li>
                    <li className="list-group-item ">{quoteGenerator(stock.c,stock.pc)}</li>
                   {stock.h && <li className="list-group-item">Daily High ${(stock.h).toFixed(2)}</li> }
                   {stock.l && <li className="list-group-item">Daily Low ${(stock.l).toFixed(2)}</li> }
                </ul>
            </div>
    )

 
    return (
        <div className="container-md" className={styles.container} id="card">
        <h2 className="text-center">Hold The Line 💎</h2>
            <div className="row align-items-center" className={styles.cardContainer}>
            {stockTile}
            </div>
        </div>
        
    )
}