import { useForm } from 'react-hook-form';
import { Container, Form, Button, Alert, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { categoriaController } from '../controllers/categoriaController';

const Categoria = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });
  const [categorias, setCategorias] = useState([]);

  const carregarCategorias = async () => {
    try {
      const data = await categoriaController.listarCategorias();
      setCategorias(data);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  };

  useEffect(() => {
    carregarCategorias();
  }, []);

  const onSubmit = async (data) => {
    try {
      await categoriaController.criarCategoria(data);
      setAlert({ show: true, message: 'Categoria criada com sucesso!', variant: 'success' });
      reset();
      carregarCategorias();
    } catch (error) {
      setAlert({ show: true, message: 'Erro ao criar categoria', variant: 'danger' });
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Cadastro de Categoria</h2>
      
      {alert.show && (
        <Alert variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible>
          {alert.message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit(onSubmit)} className="col-md-6">
        <Form.Group className="mb-3">
          <Form.Label>Nome da Categoria</Form.Label>
          <Form.Control
            type="text"
            {...register('nome', { required: 'Nome é obrigatório' })}
            isInvalid={!!errors.nome}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nome?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar Categoria
        </Button>
      </Form>

      <hr className="my-4" />
      
      <h3 className="mb-3">Lista de Categorias</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nome}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Categoria;