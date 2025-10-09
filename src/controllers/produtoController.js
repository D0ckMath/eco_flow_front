import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const produtoController = {
  async listarProdutos() {
    try {
      const response = await axios.get(`${API_BASE_URL}/produto`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  }
};