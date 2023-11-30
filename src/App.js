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
    axios.get('https://qtify-backend-labs.crio.do/albums/top').then((response) => {
      const data = response.data;

      if (Array.isArray(data)) {
        setTopAlbums(data);
      } else {
        console.error('Unexpected data format for top albums:', data);
      }
    });
  }, []);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/new').then((response) => {
      const data = response.data;

      if (Array.isArray(data)) {
        setNewAlbums(data);
      } else {
        console.error('Unexpected data format for new albums:', data);
      }
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
