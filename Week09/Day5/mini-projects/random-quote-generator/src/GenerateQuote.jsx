import quotes from "./assets/QuotesDatabase.json";
import React, { useState, useEffect } from 'react';


const GenerateQuote = (props) => {
    const [usedQuote, setUsedQuote] = useState([])
    const [currentQuote, setCurrentQuote] = useState()

    const getRandomIndex = () => {
        return Math.floor(Math.random() * quotes.length)
    }

    const getRandomHex = () => {
        let letters = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }


    const newQuote = () => {
        let index = getRandomIndex()
        while (usedQuote.includes(index)) {
            index = getRandomIndex()
        }

        setUsedQuote([...usedQuote], index)
        setCurrentQuote(quotes[index])
    }


    useEffect(() => {
        newQuote()
    }, [])

    return (
        <><div style={{backgroundColor: getRandomHex()}}>
            <h1 style={{ color: getRandomHex() }}>{currentQuote?.quote}</h1>
            <h4>{currentQuote?.author}</h4>
            <button onClick={newQuote} style={{ backgroundColor: getRandomHex() }}>New quote</button>
        </div>
        </>
    );
}

export default GenerateQuote;