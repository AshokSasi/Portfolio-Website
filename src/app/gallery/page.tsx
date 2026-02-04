'use client';

import MasonryOptimized from "../../../blocks/Components/Masonry/MasonryOptimized";
import { useState } from 'react';

// Optimized image data with proper dimensions and metadata
const items = [
  // Cars
  {
    id: "1",
    img: "/corvette-5.jpg",
    url: "/corvette-5.jpg",
    height: 450,
    width: 800,
    alt: "Red Corvette sports car",
    category: "cars",
    priority: true,
  },
  {
    id: "2",
    img: "/bmw.jpg",
    url: "/bmw.jpg",
    height: 250,
    width: 800,
    alt: "BMW luxury vehicle",
    category: "cars",
    priority: true,
  },
  {
    id: "3",
    img: "/corvette-1.jpg",
    url: "/corvette-1.jpg",
    height: 450,
    width: 800,
    alt: "Corvette exterior shot",
    category: "cars",
  },
  {
    id: "4",
    img: "/corvette-2.jpeg",
    url: "/corvette-2.jpeg",
    height: 300,
    width: 800,
    alt: "Corvette detail view",
    category: "cars",
  },
  {
    id: "5",
    img: "/corvette-3.jpeg",
    url: "/corvette-3.jpeg",
    height: 450,
    width: 800,
    alt: "Corvette side profile",
    category: "cars",
  },
  {
    id: "6",
    img: "/corvette-4.jpeg",
    url: "/corvette-4.jpeg",
    height: 600,
    width: 800,
    alt: "Corvette dynamic shot",
    category: "cars",
  },
  {
    id: "7",
    img: "/mustang-edit-1.jpg",
    url: "/mustang-edit-1.jpg",
    height: 450,
    width: 800,
    alt: "Ford Mustang muscle car",
    category: "cars",
  },
  {
    id: "8",
    img: "/teddy-1.jpg",
    url: "/teddy-1.jpg",
    height: 450,
    width: 800,
    alt: "Teddy bear plush toy",
    category: "misc",
    priority: true,
  },
  // Fukuoka
  {
    id: "9",
    img: "/fukuoka-1.jpg",
    url: "/fukuoka-1.jpg",
    height: 450,
    width: 800,
    alt: "Fukuoka cityscape, Japan",
    category: "fukuoka",
  },
  {
    id: "10",
    img: "/fukuoka-2.jpg",
    url: "/fukuoka-2.jpg",
    height: 450,
    width: 800,
    alt: "Fukuoka street scene",
    category: "fukuoka",
  },
  {
    id: "11",
    img: "/fukuoka-3.jpg",
    url: "/fukuoka-3.jpg",
    height: 450,
    width: 800,
    alt: "Fukuoka architecture",
    category: "fukuoka",
  },
  {
    id: "12",
    img: "/fukuoka-4.jpg",
    url: "/fukuoka-4.jpg",
    height: 450,
    width: 800,
    alt: "Fukuoka urban landscape",
    category: "fukuoka",
  },
  // Kyoto
  {
    id: "13",
    img: "/kyoto-1.jpg",
    url: "/kyoto-1.jpg",
    height: 450,
    width: 800,
    alt: "Kyoto temple garden",
    category: "kyoto",
  },
  {
    id: "14",
    img: "/kyoto-2.jpg",
    url: "/kyoto-2.jpg",
    height: 450,
    width: 800,
    alt: "Kyoto traditional architecture",
    category: "kyoto",
  },
  {
    id: "15",
    img: "/kyoto-3.jpg",
    url: "/kyoto-3.jpg",
    height: 450,
    width: 800,
    alt: "Kyoto bamboo forest",
    category: "kyoto",
  },
  {
    id: "16",
    img: "/kyoto-4.jpg",
    url: "/kyoto-4.jpg",
    height: 450,
    width: 800,
    alt: "Kyoto shrine entrance",
    category: "kyoto",
  },
  {
    id: "17",
    img: "/kyoto-5.jpg",
    url: "/kyoto-5.jpg",
    height: 450,
    width: 800,
    alt: "Kyoto scenic view",
    category: "kyoto",
  },
  {
    id: "18",
    img: "/kyoto-6.jpg",
    url: "/kyoto-6.jpg",
    height: 450,
    width: 800,
    alt: "Kyoto historical site",
    category: "kyoto",
  },
  {
    id: "19",
    img: "/kyoto-7.jpg",
    url: "/kyoto-7.jpg",
    height: 450,
    width: 800,
    alt: "Kyoto street photography",
    category: "kyoto",
  },
  {
    id: "20",
    img: "/kyoto-8.jpg",
    url: "/kyoto-8.jpg",
    height: 450,
    width: 800,
    alt: "Kyoto traditional district",
    category: "kyoto",
  },
  // Miyajima
  {
    id: "21",
    img: "/miyajima-1.jpg",
    url: "/miyajima-1.jpg",
    height: 450,
    width: 800,
    alt: "Miyajima floating torii gate",
    category: "miyajima",
  },
  {
    id: "22",
    img: "/miyajima-2.jpg",
    url: "/miyajima-2.jpg",
    height: 450,
    width: 800,
    alt: "Miyajima island view",
    category: "miyajima",
  },
  {
    id: "23",
    img: "/miyajima-3.jpg",
    url: "/miyajima-3.jpg",
    height: 450,
    width: 800,
    alt: "Miyajima deer and shrine",
    category: "miyajima",
  },
  // Tokyo - Sensoji
  {
    id: "24",
    img: "/sensoji-1.jpg",
    url: "/sensoji-1.jpg",
    height: 450,
    width: 800,
    alt: "Sensoji Temple entrance gate",
    category: "tokyo",
  },
  {
    id: "25",
    img: "/sensoji-2.jpg",
    url: "/sensoji-2.jpg",
    height: 450,
    width: 800,
    alt: "Sensoji Temple main hall",
    category: "tokyo",
  },
  {
    id: "26",
    img: "/sensoji-3.jpg",
    url: "/sensoji-3.jpg",
    height: 450,
    width: 800,
    alt: "Sensoji Temple Nakamise shopping street",
    category: "tokyo",
  },
];
export default function Gallery() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem 0',
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden'
    }}>
      <MasonryOptimized
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="random"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={false}
        colorShiftOnHover={false}
      />
    </div>
  );
}
