import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { produtoController } from '../controllers/produtoController';

const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const data = await produtoController.listarProdutos();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarProdutos();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Carregando produtos...</div>;
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Lista de Produtos</h2>
      <Row>
        {produtos.map(produto => (
          <Col md={6} lg={4} key={produto.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <div className="mb-2">
                  <strong>Categoria:</strong> {produto.categoria.nome}
                </div>
                <Badge bg={produto.statusProduto === 'ATIVO' ? 'success' : 'secondary'}>
                  {produto.statusProduto}
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Produto;