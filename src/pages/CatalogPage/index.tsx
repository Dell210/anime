import './style.css';
import { ICatalog } from '../../interfaces';

interface Props{
  handleSwitch: (page: string) => void
  catalog: ICatalog[]
  title: string
}

const CatalogPage = ({handleSwitch, catalog, title}:Props) => {
  
  return (
    <div className="catalog-container">
      <div>
        <a onClick={()=>handleSwitch('home')}>Voltar</a>
      </div>
      <h1>{title}</h1>
      <div className="anime-list">
        {catalog.map(e => (
          <div key={e.id} className="anime-item">
            <div className="anime-content">
              <h2>{e.title}</h2>
              <img src={e.img}/>
              <p><strong>Genre:</strong> {e.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
