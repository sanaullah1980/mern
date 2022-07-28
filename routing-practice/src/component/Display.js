import React from 'react'
import { useParams } from 'react-router-dom'

const Display = (props) => {
    const { word, color1, color2 } = useParams();
    return (
        <h1 style={{color: color1, background: color2 }}>{word}</h1>
  )
}

export default Display