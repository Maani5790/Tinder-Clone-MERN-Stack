import React, { useEffect, useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from "./axios"

function TinderCards() {
//     const [people, setPeople] = useState([{
//         name : "Elon Musk",
//         url: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
//     },
//     {
//     name : "Mark Zuckerberg",
//     url: "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
//     },

//     {
//         name : "john abraham",
//         url: "https://www.koimoi.com/wp-content/new-galleries/2022/06/john-abraham-trolled-for-calling-himself-big-screen-hero-would-not-like-to-be-available-for-%E2%82%B9299-or-499-netizens-say-iski-movie-dekhta-bhi-kon-hain-001.jpg",
//         },

// ]);
const [people, setPeople] = useState([]);

useEffect(()=>{
    async function fetchData(){
        const req = await axios.get("/tinder/cards");

        setPeople(req.data);
    }
    fetchData();

},[])
console.log(people);

  const swiped = (direction, nameToDelete) =>{
    console.log("removing", + nameToDelete)
  }

  const outOfFrame = (name) =>{
    console.log(name + "left of the screen")
  }
  return (
    
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
        {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div 
                style={{backgroundImage: `url(${person.imgURL})`}}
                className='card'
                >
                    <h3>{person.name}</h3>
                    
                </div>
            
            </TinderCard>
        ))}
        </div>
    </div>
    
    
    )
}

export default TinderCards