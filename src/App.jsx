import React, { useState, useEffect } from 'react'

const App = () => {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)

  const apiURL = 'https://thesimpsonsquoteapi.glitch.me/quotes'

  const fetchList = async () => {
    setLoading(true)
    try {
      const res = await fetch(apiURL)
      const json = await res.json()
      //console.log(json);
      setQuotes(json)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching quotes:', error)
    } finally {
      console.log('işlem tamamlandı')
    }
  }

  useEffect(() => {
    fetchList()
    //console.log(quotes);
  }, [])

  function handleClick() {
    fetchList()
  }

  if (loading && quotes.length === 0) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="container">
      <h1>Project 3: Quote Generator</h1>
      <div className="quote-container">
        <button className="quote-button" onClick={handleClick}>
          New Quote
        </button>
        <p className="quote">{quotes[0]?.quote || 'Loading...'}</p>
        <p className="quote">- {quotes[0]?.character || 'Unknown'}</p>
      </div>
    </div>
  )
}
export default App
