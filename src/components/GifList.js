import React from "react"

function GifList ({gifs}) {
    // console.log(gifs)
    return (
        <div>
            <ul>
                {gifs.map((gif, index) => <li key={index}><iframe title={index} src={gif}></iframe></li>)}
            </ul>
        </div>
    )
}

export default GifList