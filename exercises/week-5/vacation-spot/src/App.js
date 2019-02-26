import React from 'react'
import List from './List.js'
import './style.css'

const App = () => {
    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring",
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meridian-idaho-welcome-sign.jpg/250px-Meridian-idaho-welcome-sign.jpg"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter",
          imgUrl: "https://travel.usnews.com/static-travel/images/destinations/14/cancun_main_getty.jpg"

        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall",
          imgUrl:"https://isthatplacesafe.com/wp-content/uploads/2018/10/china.jpg"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer",
          imgUrl: "https://thehill.com/sites/default/files/styles/thumb_small_article/public/article_images/russia-kremlin-getty.jpg?itok=hFTU74Yd"
        },{
          place: "Hawaii",
          price: 400,
          timeToGo: "Spring",
          imgUrl: "https://www.gohawaii.com/sites/default/files/styles/narrow_carousel_large/public/content-carousel-images/Napali_0.jpg?itok=CZaVBQdQ"
        },
        {
          place: "Los Angeles", 
          price: 800,
          timeToGo: "Summer",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenPo7mVei13KCpd3gbFFfKoJ4uWTbMUKKSdBlgYWleT7n1iJukA"
        }
      ]

      return (
          <div>
            <h1 style={
            {
            margin: 50, 
            padding: 5, 
            fontSize: 40,
            textAlign: "center", 
            color: 'white'}}>Destinations</h1>
              <List vacations={vacationSpots}/>
          </div>
      )
}

export default App