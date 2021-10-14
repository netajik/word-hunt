import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState([]);
  const [meanings, setmeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );

      setmeanings(data.data);
    } catch (error) {
      throw error;
    }
  }
  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);
  return (
    <div 
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white"}}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh"}}
      >
        <Header />
      </Container>
    </div>
  );
}

export default App;
