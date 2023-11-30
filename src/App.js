import { useEffect, useState } from 'react';
import './App.css';
import HeroSection from './MyComponent/HeroSection/HeroSection';
import Navbar from './MyComponent/Navbar/Navbar';
import Section from './MyComponent/Section/Section';
import axios from 'axios';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

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

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section title='Top Albums' data={topAlbums} />
      <Section title='New Albums' data={newAlbums} />
    </div>
  );
}

export default App;
