import './style.css';

interface Props{
    handleSwitch: (page: string) => void
}

function Home({ handleSwitch}:Props) {
  return (
    <div className="container">
      <header>
        <h1>Meu Site de Animes</h1>
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a onClick={()=>handleSwitch('anime')}>Animes</a></li>
            <li><a onClick={()=>handleSwitch('manga')}>Mangás</a></li>
            <li><a href="#destaques">Destaques</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="inicio" className="anime-section">
          <div className="anime-img">
            <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/8b7f5847f9b97f921e41d4ef59fd2d79.jpe" alt="Anime 1" />
          </div>
          <div className="anime-img">
            <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpe" alt="Anime 2" />
          </div>
          <div className="anime-img">
            <img src="https://img.odcdn.com.br/wp-content/uploads/2022/07/Dragon-Ball-Z.webp" alt="Anime 3" />
          </div>
          <div className="anime-img">
            <img src='https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe' alt="Anime 4" />
          </div>
        </section>
        <section id="animes">
          <h2>Últimos Lançamentos</h2>
          <ul>
            <li>Attack on Titan</li>
            <li>One Piece</li>
            <li>Demon Slayer</li>
            <li>My Hero Academia</li>
          </ul>
        </section>
        <section id="mangas">
          <h2>Top Animes</h2>
          <ol>
            <li>Naruto</li>
            <li>Dragon Ball</li>
            <li>Death Note</li>
            <li>Fullmetal Alchemist</li>
          </ol>
        </section>
        <section id="destaques">
          <h2>Mangás em Destaque</h2>
          <ol>
            <li>One Punch Man</li>
            <li>Tokyo Ghoul</li>
            <li>Black Clover</li>
            <li>Haikyuu!!</li>
          </ol>
        </section>
        <section id="sobre">
          <div className="section-box">
            <h2 className="section-title">Sobre</h2>
            <div className="section-content">
              <p>Este site foi criado para fornecer informações e entretenimento relacionados a animes e mangás. Navegue pelo site para descobrir os últimos lançamentos, os melhores animes e mangás em destaque!</p>
            </div>
          </div>
          <div className="section-box">
            <h2 className="section-title">Contato</h2>
            <div className="section-content">
              <p>Para entrar em contato conosco, envie um e-mail para <a href="mailto:contato@meusite.com">contato@meusite.com</a>.</p>
            </div>
          </div>
          <div className="section-box">
            <h2 className="section-title">FAQ</h2>
            <div className="section-content">
              <p>Aqui estão algumas perguntas frequentes:</p>
              <ul>
                <li>Como posso assistir aos animes?</li>
                <li>Qual é o horário de atualização do site?</li>
                <li>Posso sugerir um novo anime para ser adicionado?</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Meu Site de Animes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;