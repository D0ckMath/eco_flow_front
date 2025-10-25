import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const produtos = [
    { id: 1, nome: 'Garrafas PET', categoria: 'Plástico', preco: 'R$ 2,50/kg', vendedor: 'João Silva' },
    { id: 2, nome: 'Papel Branco', categoria: 'Papel', preco: 'R$ 1,20/kg', vendedor: 'Maria Santos' },
    { id: 3, nome: 'Latas de Alumínio', categoria: 'Metal', preco: 'R$ 4,80/kg', vendedor: 'Pedro Costa' },
    { id: 4, nome: 'Vidro Transparente', categoria: 'Vidro', preco: 'R$ 0,80/kg', vendedor: 'Ana Lima' }
  ];

  const filteredProdutos = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <img src="https://www.reciclagemnomeioambiente.com.br/wp-content/uploads/2013/08/simbolo-internacional-da-reciclagem.jpg" alt="EcoFlow" />
          EcoFlow
        </div>
        <nav className="dashboard-nav">
          <button onClick={() => navigate('/')}>Início</button>
          <button className="profile-btn" onClick={() => navigate('/profile')}>Meu Perfil</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="search-section">
          <h1>Buscar Produtos Recicláveis</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Busque por produtos ou categorias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>🔍</button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProdutos.map(produto => (
            <div key={produto.id} className="product-card">
              <h3>{produto.nome}</h3>
              <p className="category">{produto.categoria}</p>
              <p className="price">{produto.preco}</p>
              <p className="seller">Vendedor: {produto.vendedor}</p>
              <button className="contact-btn">Entrar em Contato</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;