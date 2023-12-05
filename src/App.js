import { useEffect, useState } from 'react';
import './App.css';
import HeroSection from './MyComponent/HeroSection/HeroSection';
import Navbar from './MyComponent/Navbar/Navbar';
import Section from './MyComponent/Section/Section';
import axios from 'axios';
import FilterSection from './MyComponent/FilterSection/FilterSection';
import FaqSection from './MyComponent/FaqSection/FaqSection';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [newSongs, setAllSongs] = useState([]);
  const [genres, setAllGenres] = useState([]);
  const [filteredSongs,SetFilteredSongs] = useState([])

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/top').then(({data}) => {
      setTopAlbums(data)
    });
  }, []);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/new').then(({data}) => {
    setNewAlbums(data)
  });
  }, []);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/songs').then(({data}) => {
      setAllSongs(data)
      SetFilteredSongs(data)
  });
  }, []);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/genres').then(({data}) => {
      setAllGenres([{
        "key": "All",
        "label": "All"
    },...data.data])
  });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section title='Top Albums' data={topAlbums} />
      <Section title='New Albums' data={newAlbums} />
      <FilterSection title='Songs' data={filteredSongs} filters={genres} filterLogic={(genres)=>{
        if(genres==="All"){
          SetFilteredSongs (newSongs)
        }
       else {
        SetFilteredSongs (newSongs.filter(song => song.genre.key===genres))
       }
      }}/>
      <FaqSection/>
    </div>
  );
}

export default App;
