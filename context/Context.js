import React, { useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {

    const apiKEYFH = process.env.REACT_APP_FINNHUB
    const baseUrl = 'https://finnhub.io/api/v1/'

    const todayDate = new Date().toISOString().slice(0,10);
    const marketNewsLimit = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().slice(0,10);
    const companyNewsLimit = new Date(new Date().setDate(new Date().getDate() - 365)).toISOString().slice(0,10);

    const [gamestop, setGamestop] = useState([])
    const [gamestopNews, setGamestopNews] = useState()
    const [amc, setAmc] = useState([])
    const [amcNews, setAmcNews] = useState([])
    const [nok, setNok] = useState([])
    const [nokNews, setNokNews] = useState([])
    
    const fetchSingleStockQuote = async (x) => {
        await fetch(`${baseUrl}quote?symbol=${x}&token=${apiKEYFH}`)
        .then(res => res.json())
        .then(data => 
                    x === 'GME' ? setGamestop(data) : x === 'AMC' ? setAmc(data) : 'NOK' ? setNok(data) : 'BB' ? setBb(data) : 'KOSS' ? setKoss(data) : ''        
               )    
        .catch(error => console.log(error))
    }

    
    const fetchSingleStockNews = async () => {
        await fetch(`https://finnhub.io/api/v1/company-news?symbol=GME&from=${companyNewsLimit}&to=${todayDate}&token=${apiKEYFH}`)
        .then(res => res.json())
        .then(data => 
                    setGamestopNews(data)     
               )    
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchSingleStockQuote('GME')
        fetchSingleStockQuote('AMC')
        fetchSingleStockQuote('NOK')
        fetchSingleStockNews()
       
    }, [])

    function sourceCleaner(str) {
        if (str !== undefined) {
            return str.replace(/(^\w+:|^)\/\//, '')
            .replace('www.','')
            .replace('.com', '')
            .replace('.co', '')
            .replace('.uk', '')
            .replace('.in', '')
            .replace('.fr', '')
            .replace('.es', '')
            .replace('.au', '')
        }
    }

    function truncateNewsSummary(str) {
        if (str !== undefined) {
            return (str.length > 200) ? str.substr(0, 200-1) + '...' : str
        }
    }


    function dateTimeConverter(date) {
        let time = new Date(date * 1000).toISOString().slice(0,10).replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
            return m + '/' + d + '/' + y;  
        })
         return time
    }

    function quoteGenerator(x,y) {
        return x-y >=0 ? <span style={{color: 'green'}}>${(x-y).toFixed(2)}</span> :
                         <span style={{color: 'red'}}>${(x-y).toFixed(2)}</span>
 
    }
    

    return (
        <Context.Provider value={{gamestop, amc, nok, baseUrl, apiKEYFH, todayDate, marketNewsLimit, gamestopNews, amcNews, nokNews, setGamestopNews, marketNewsLimit, todayDate, sourceCleaner, truncateNewsSummary, dateTimeConverter, quoteGenerator, setNok, setAmc, setGamestop, fetchSingleStockQuote}} >
            {children}
        </Context.Provider>
    )
 }

 export {ContextProvider, Context}