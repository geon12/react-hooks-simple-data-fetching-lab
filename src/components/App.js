// create your App component here

import React, {useState,useEffect} from "react";


function App() {

    const [imageUrl, setImageUrl] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(resp => {
                setImageUrl(resp.message)
                setIsLoaded(true)
            })
    },[])
    if (!isLoaded) return <p>Loading...</p>
    return <img src={imageUrl} alt="A Random Dog"/>      
    
}

export default App;