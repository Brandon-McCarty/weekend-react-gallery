import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [gallery, setGallery] = useState([])

  const getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      setGallery(response.data);
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getGallery();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList />
      </div>
    );
}

export default App;
