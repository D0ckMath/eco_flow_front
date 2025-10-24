import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Cabeçalho */}
      <header>
        <div className="logo">
          <img src="https://www.reciclagemnomeioambiente.com.br/wp-content/uploads/2013/08/simbolo-internacional-da-reciclagem.jpg" alt="Símbolo internacional da reciclagem" />
          EcoFlow
        </div>
        <nav>
          <a href="#materiais">Materiais</a>
          <a href="#porque">Por que escolher a EcoFlow?</a>
          <button onClick={() => navigate('/cadastro')}>Cadastro</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>Bem-vindo à EcoFlow</h1>
        <p>
          Conectamos pessoas e empresas para comprar, vender e doar materiais recicláveis.
          Sustentabilidade, economia circular e responsabilidade social em um só lugar.
        </p>
        <div className="actions">
          <button className="btn btn-primary" onClick={() => navigate('/cadastro')}>Cadastrar-se</button>
          <button className="btn btn-secondary" onClick={() => navigate('/login')}>Entrar</button>
        </div>
      </section>

      {/* Materiais Aceitos */}
      <section id="materiais">
        <h2>♻️ Materiais Aceitos</h2>
        <div className="grid">
          <div className="card">
            <img src="https://img.elo7.com.br/product/zoom/240C87D/adesivos-coleta-seletiva-lixo-reciclado-pte-c-4-unid-adesivo.jpg" alt="Reciclagem de Plásticos" loading="lazy" />
            <h3>Plásticos</h3>
            <p>Garrafas PET, embalagens, plásticos rígidos e flexíveis.</p>
          </div>
          <div className="card">
            <img src="https://http2.mlstatic.com/adesivo-vinil-lixo-reciclavel-papel-14x18cm-5-unidades-D_NQ_NP_808648-MLB27726224658_072018-F.jpg" alt="Reciclagem de Papéis e Papelão" loading="lazy" />
            <h3>Papel e Papelão</h3>
            <p>Caixas, papéis usados, jornais, revistas e papelão prensado.</p>
          </div>
          <div className="card">
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_807656-MLB46467219192_062021-F.jpg" alt="Reciclagem de Metais" loading="lazy" />
            <h3>Metais</h3>
            <p>Latas de alumínio, sucata metálica, ferro e aço.</p>
          </div>
          <div className="card">
            <img src="https://cdn.awsli.com.br/1000x1000/173/173680/produto/6133997/5dcf7f1100.jpg" alt="Reciclagem de Vidros" loading="lazy" />
            <h3>Vidros</h3>
            <p>Garrafas, potes, cacos de vidro separados por cor.</p>
          </div>
        </div>
      </section>

      {/* Por que escolher a EcoFlow */}
      <section id="porque">
        <h2>🌍 Por que escolher a EcoFlow?</h2>
        <div className="grid">
          <div className="card">
            <h3>Confiabilidade</h3>
            <p>Negociações transparentes entre compradores e vendedores.</p>
          </div>
          <div className="card">
            <h3>Sustentabilidade</h3>
            <p>Ajude a reduzir resíduos e apoiar a economia circular.</p>
          </div>
          <div className="card">
            <h3>Comunidade</h3>
            <p>Conecte-se a fornecedores, compradores e doadores de recicláveis.</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        © 2025 EcoFlow — Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Home;