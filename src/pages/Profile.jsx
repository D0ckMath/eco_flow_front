import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    telefone: '(11) 99999-9999',
    perfil: 'Vendedor',
    endereco: 'São Paulo, SP'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Dados salvos:', userData);
    setIsEditing(false);
  };

  return (
    <div className="profile">
      {/* Header */}
      <header className="profile-header">
        <div className="profile-logo">
          <img src="https://www.reciclagemnomeioambiente.com.br/wp-content/uploads/2013/08/simbolo-internacional-da-reciclagem.jpg" alt="EcoFlow" />
          EcoFlow
        </div>
        <nav className="profile-nav">
          <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button onClick={() => navigate('/')}>Início</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="profile-main">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-avatar">
              <div className="avatar-circle">
                {userData.nome.charAt(0)}
              </div>
            </div>
            
            <h1>Meu Perfil</h1>
            
            <div className="profile-form">
              <div className="form-group">
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={userData.nome}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={userData.telefone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="form-group">
                <label>Perfil</label>
                <select
                  name="perfil"
                  value={userData.perfil}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="Comprador">Comprador</option>
                  <option value="Vendedor">Vendedor</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Endereço</label>
                <input
                  type="text"
                  name="endereco"
                  value={userData.endereco}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <div className="profile-actions">
              {!isEditing ? (
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  Editar Perfil
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="save-btn" onClick={handleSave}>
                    Salvar
                  </button>
                  <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;