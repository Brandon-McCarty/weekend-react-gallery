import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

function App() {

  const [galleryList, setGalleryList] = useState([])

  const getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      setGalleryList(response.data);
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    })
  }; // End getGallery

  useEffect(() => {
    getGallery();
  }, [])

    return (
      <div className="App">
        <Header />
        <GalleryList 
        galleryList={galleryList}
        />
      </div>
    );
}

export default App;
