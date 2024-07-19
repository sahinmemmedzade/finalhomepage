// Home.jsx
import React from 'react';
import NewsTicker from './homepage/newsticker';
import Carousel from './homepage/menu';
import CarouselHome from './homepage/carousel';
import Sidebar from './sidebar.jsx';
import ScrollingList from './homepage/scrollnews';
import CardComponent from './homepage/card.jsx';
import './Home.css';

const Home = () => {
  const cards = [
   
    {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    {
      image: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
      date: "18 İYL, 2024 / 16:56",
      views: "350",
      likes: "16",
      comments: "2",
      category: "CƏMİYYƏT",
      mediaType: "FOTO",
    }, {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    {
      image: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
      date: "18 İYL, 2024 / 16:56",
      views: "350",
      likes: "16",
      comments: "2",
      category: "CƏMİYYƏT",
      mediaType: "FOTO",
    }, {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    {
      image: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
      date: "18 İYL, 2024 / 16:56",
      views: "350",
      likes: "16",
      comments: "2",
      category: "CƏMİYYƏT",
      mediaType: "FOTO",
    }, {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    {
      image: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
      date: "18 İYL, 2024 / 16:56",
      views: "350",
      likes: "16",
      comments: "2",
      category: "CƏMİYYƏT",
      mediaType: "FOTO",
    },
    {
      image: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
      date: "18 İYL, 2024 / 16:56",
      views: "350",
      likes: "16",
      comments: "2",
      category: "CƏMİYYƏT",
      mediaType: "FOTO",
    },
    {
      image: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
      date: "18 İYL, 2024 / 16:56",
      views: "350",
      likes: "16",
      comments: "2",
      category: "CƏMİYYƏT",
      mediaType: "FOTO",
    },
    {
      image: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
      date: "18 İYL, 2024 / 16:56",
      views: "350",
      likes: "16",
      comments: "2",
      category: "CƏMİYYƏT",
      mediaType: "FOTO",
    },
    
    // ... digər kartlar
  ];

  return (
    <>
      <Sidebar />
      <NewsTicker />
      <Carousel />
      <div className='main'>
        <CarouselHome />
        <ScrollingList />
      </div>
        <CardComponent cards={cards} />
    </>
  );
}

export default Home;
