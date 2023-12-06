import "./Section.css"
import React, { useState } from 'react'
import Card from "../Card/Card";
import Corousel from "../Corousel/Corousel";
function Section({title , data}) {
  const [isCollasped,setCollasped] = useState(false)
  return (
    <div className="section">
       <div className="secton-header">
        <h1 className="title">{title}</h1>
        <h1 className="section-toggle-btn"onClick={()=>{
          setCollasped(!isCollasped)
        }}>{isCollasped ? 'Show All': 'Collaspe'}
        </h1>
        </div>
        { isCollasped ? < Corousel data={data}/> :
        <div className="card-container">
        {data.map(cardData => <Card
        key={cardData.id}
         imgSrc={cardData.image}
         followersCount={cardData.follows}
         label={cardData.title}
         tooltipText="42 songs" 
         />)}
         
        </div>}
    </div>
  )
}

export default Section;