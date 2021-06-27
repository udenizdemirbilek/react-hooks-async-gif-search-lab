import React, { useState } from "react"
import GifSearch from "./GifSearch"
import GifList from "./GifList"

function GifListContainer () {
    const [gifs, setGifs] = useState([])

    function searchSubmit (e, search) {
        e.preventDefault()
        const gifList = []
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            for(let i=0; i<3; i++){
                gifList.push(data.data[i].embed_url)
            }
            setGifs(gifList)
        })
    }

    return (
        <div>
            <GifSearch searchSubmit={searchSubmit}/>
            <GifList gifs={gifs}/>
        </div>
    )
}

export default GifListContainer