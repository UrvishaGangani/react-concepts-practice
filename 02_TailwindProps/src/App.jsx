import { useState } from 'react'
import './App.css';
import Card from './components/Card';
import ThemeController from './components/ThemeController';

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
       <div className="min-h-screen px-8 pb-24 pt-4">
        <ThemeController />

        <div className="max-w-8xl mx-auto flex flex-wrap justify-start gap-10">
          {allCardDetail.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App
