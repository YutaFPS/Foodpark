import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './pages.css'
import axios from 'axios'
import Cardproduto from '../components/Cardproduto'

function CerealKiller() {

   const [produtos, setProdutos] = useState([])

    const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    useEffect(() => {
      fetchProdutos()
      console.log(produtos);
    },[])

    const cadastrarProduto = async () => {
        try {
            const produto = {
                nome: "produtoteste",
                preco: 201,
                estabelecimento: "Cereal",
            };
            const response = await axios.post('http://localhost:3000/produtos', produto);
            if (response.status === 201) {
                fetchProdutos();
                
            }
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    };

    const salvarProduto = async (id) => {
        try {
            const produto = {
                nome: "Gordura Trams",
                preco: 10,
                estabelecimento: "Cereal",
            };
            const response = await axios.put(`http://localhost:3000/produtos/${id}`, produto);
            if (response.status === 200) {
                fetchProdutos();
                // setClienteSelecionado(null);
                // limparForm();
            }
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
    };

        const deletarProduto = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/produtos/${id}`);
            if (response.status === 200) {
                fetchProdutos();
            }
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    };

  return (
    
        <div className='cont-cereal'>
            <Navbar />
            <h1>Cereal KIller Cereal Bar</h1>
            <p className='text'>A dor, em si, é uma fonte de sofrimento; é um estado de ser que rejeita a natureza dos prazeres e das dores. Aqui, um senso de liberdade — semelhante ao prazer da conveniência — critica fortemente o indivíduo, pois todas as coisas envolvem certa medida de dor ou afetam aqueles que nelas estão envolvidos.</p>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita excepturi illo culpa harum aliquam fuga accusamus animi dolorum. Non explicabo quae commodi ducimus accusamus beatae facilis veniam recusandae reiciendis!</p>
            <img className="panicologo"  src='panico.webp'></img>
          <div>
            Produtos no Cardapio:
            {produtos.map((p) => (
              <Cardproduto key={p.id} p={p} />
            ))}
          </div>

            <button onClick={cadastrarProduto}> Cadastrar Teste </button>
            <button onClick={() => salvarProduto(49)}>Editar Teste</button>
            <button onClick={() => deletarProduto(43)}>Deletar Teste</button>
        </div>
    
  )
}
 


export default CerealKiller
