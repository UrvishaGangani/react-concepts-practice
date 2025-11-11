import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  let allCardDetail = [{
    img: "https://picsum.photos/400/300?random=20",
    cardTitle: "Modern Design Solutions",
    cardDesc: "Discover cutting-edge design patterns and UI components that elevate your digital experiences.",
    totalviews:234    
  },
  {
    img: "https://picsum.photos/400/300?random=90",
    cardTitle: "Modern App Solutions",
    cardDesc: "Discover cutting-edge design patterns and UI components that elevate your digital experiences.",
    totalviews:1020    
    },
  {
    img: "https://picsum.photos/400/300?random=10",
    cardTitle: "Modern Web Solutions",
    cardDesc: "Discover cutting-edge design patterns and UI components that elevate your digital experiences.",
    totalviews:244    
  },{
    img: "https://picsum.photos/400/300?random=15",
    cardTitle: "Modern Tech Solutions",
    cardDesc: "Discover cutting-edge design patterns and UI components that elevate your digital experiences.",
    totalviews:500    
  }]
  return (
    <>      
        <div className="min-h-screen bg-red-100 flex flex-wrap justify-left gap-4 p-4">
          {allCardDetail.map((card, index) => (
            // <Card key={index} cardProps={card} />
            <Card key={index} {...card} />
          ))}
        </div>      
    </>
  );
}

export default App
