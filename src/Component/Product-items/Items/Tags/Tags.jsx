import React from 'react';
import './Tags.scss'

//-->ItemsContenair
const Tags= ({tags}) => {
  return (
    
        <div className='tags' >
            {tags.map((tags, index) => (
                <p className='tags__text' key={index}>{tags}</p>
            ))}
        </div> 
  )
}

export default Tags;

