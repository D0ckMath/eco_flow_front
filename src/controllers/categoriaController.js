import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const categoriaController = {
  async criarCategoria(categoria) {
    try {
      const response = await axios.post(`${API_BASE_URL}/categorias`, categoria);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      throw error;
    }
  },

  async listarCategorias() {
    try {
      const response = await axios.get(`${API_BASE_URL}/categorias`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      throw error;
    }
  }
};