import React, { useState } from "react"

function GifSearch ({searchSubmit}) {
    const [search, setSearch] = useState("")

    function searchChange (e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <h3>Enter a Search Term</h3>
            <form onSubmit={(e) => searchSubmit(e, search)}>
                <input type="text" value={search} onChange={searchChange}></input>
                <button>Find Gifs</button>
            </form>
        </div>
    )
}

export default GifSearch