import React, { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import { animeCatalog, mangaCatalog } from './pages/CatalogPage/catalogList';



const App: React.FC = () => {
const [switchHome,setSwtichHome]=useState(true)
const [switchAnime,setSwtichAnime]=useState(false)
const [switchManga,setSwtichManga]=useState(false)

const handleSwitch = (page: string) => {
  if (page === 'anime') {
    setSwtichAnime(true)
    setSwtichHome(false)
    setSwtichManga(false)
   
  } else if (page === 'manga') {
    setSwtichAnime(false)
    setSwtichHome(false)
    setSwtichManga(true)
   
  } else {
    setSwtichAnime(false)
    setSwtichHome(true)
    setSwtichManga(false)
 
  }
}


  return (
    <>
    {
     switchHome && <Home handleSwitch={handleSwitch}/>
    }
    {
      switchAnime && <CatalogPage title='Catalog Anime' handleSwitch={handleSwitch} catalog={animeCatalog} />
    }
    {
      switchManga && <CatalogPage title='Catalog Manga' handleSwitch={handleSwitch} catalog={mangaCatalog} />
    }
    </>
  );
};

export default App;
