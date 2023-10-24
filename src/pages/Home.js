import React from 'react'
import { useDeveloperContext } from '../context/DeveloperContext';


const Home = () => {
    const developer = useDeveloperContext();

    if (!developer) return null

    return (
        <div className="home page-in-app">
            <h1>{developer.name}</h1>
            <div className="text-typing">
                <h2>{`<${developer.profession}/>`}</h2>
            </div>
        </div>
    )
}

export default Home
