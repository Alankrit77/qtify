import "./Section.css"
import React from 'react'
import Card from "../Card/Card";
function Section({title , data}) {
  return (
    <div className="section">
        <h1 className="title">{title}</h1>
        <div className="card-container">
        {data.map(cardData => <Card
        key={cardData.id}
         imgSrc={cardData.image}
         label={cardData.label}
         followersCount={cardData.follows}
        />)}
        </div>
    </div>
  )
}

export default Section;