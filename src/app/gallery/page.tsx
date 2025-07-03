'use client';

import Masonry from "../../../blocks/Components/Masonry/Masonry";

const items = [
  {
    id: "1",
    img: "/corvette-5.jpg",
    url: "/corvette-5.jpg",
    height: 450,
  },
  {
    id: "2",
    img: "/bmw.jpg",
    url: "/bmw.jpg",
    height: 250,
  },
  {
    id: "3",
    img: "/corvette-1.jpg",
    url: "/corvette-1.jpg",
    height: 450,
  },
  {
    id: "4",
    img: "/corvette-2.jpeg",
    url: "/corvette-2.jpeg",
    height: 300,
  },
  {
    id: "5",
    img: "/corvette-3.jpeg",
    url: "/corvette-3.jpeg",
    height: 450,
  },
  {
    id: "6",
    img: "/corvette-4.jpeg",
    url: "/corvette-4.jpeg",
    height: 600,
  },
  {
    id: "7",
    img: "/mustang-edit-1.jpg",
    url: "/mustang-edit-1.jpg",
    height: 450,
  },
  {
    id: "8",
    img: "/teddy-1.jpg",
    url: "/teddy-1.jpg",
    height: 450,
  },
  {
    id: "9",
    img: "/fukuoka-1.jpg",
    url: "/fukuoka-1.jpg",
    height: 450,
  },
  {
    id: "10",
    img: "/fukuoka-2.jpg",
    url: "/fukuoka-2.jpg",
    height: 450,
  },
  {
    id: "11",
    img: "/fukuoka-3.jpg",
    url: "/fukuoka-3.jpg",
    height: 450,
  },
  {
    id: "12",
    img: "/fukuoka-4.jpg",
    url: "/fukuoka-4.jpg",
    height: 450,
  },
  {
    id: "13",
    img: "/kyoto-1.jpg",
    url: "/kyoto-1.jpg",
    height: 450,
  },
  {
    id: "14",
    img: "/kyoto-2.jpg",
    url: "/kyoto-2.jpg",
    height: 450,
  },
  {
    id: "15",
    img: "/kyoto-3.jpg",
    url: "/kyoto-3.jpg",
    height: 450,
  },
  {
    id: "16",
    img: "/kyoto-4.jpg",
    url: "/kyoto-4.jpg",
    height: 450,
  },
  {
    id: "17",
    img: "/kyoto-5.jpg",
    url: "/kyoto-5.jpg",
    height: 450,
  },
  {
    id: "18",
    img: "/kyoto-6.jpg",
    url: "/kyoto-6.jpg",
    height: 450,
  },
  {
    id: "19",
    img: "/kyoto-7.jpg",
    url: "/kyoto-7.jpg",
    height: 450,
  },
  {
    id: "20",
    img: "/kyoto-8.jpg",
    url: "/kyoto-8.jpg",
    height: 450,
  },
  {
    id: "21",
    img: "/miyajima-1.jpg",
    url: "/miyajima-1.jpg",
    height: 450,
  },
  {
    id: "22",
    img: "/miyajima-2.jpg",
    url: "/miyajima-2.jpg",
    height: 450,
  },
  {
    id: "23",
    img: "/miyajima-3.jpg",
    url: "/miyajima-3.jpg",
    height: 450,
  },
  {
    id: "24",
    img: "/sensoji-1.jpg",
    url: "/sensoji-1.jpg",
    height: 450,
  },
  {
    id: "25",
    img: "/sensoji-2.jpg",
    url: "/sensoji-2.jpg",
    height: 450,
  },
  {
    id: "26",
    img: "/sensoji-3.jpg",
    url: "/sensoji-3.jpg",
    height: 450,
  },
  // ... more items
];
export default function Home() {
  return (

    <div>

      <Masonry
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
