import './ProductList.css';
import produtos from '../../data/produtos.json'
import corCategoria from '../../data/corCategoria.json'
import ProductCard from '../ProductCard/ProductCard';
import {useState} from 'react';

function ProductList() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const todasCategorias = produtos.map((produto) => produto.categoria);
    const categorias = todasCategorias.filter(
        (categoria, index ,lista) => lista.indexOf(categoria) === index);

    return (
        <>
        <main className="product-list">
            <h2 className='buy-categories'>Compre por categoria</h2>
            <div className="product-categories">
                <button onClick={() => setCategoriaSelecionada(null)}>Todos</button>
                {categorias.map((categoria) => (
                <button 
                    key={categoria}
                    style={{backgroundColor: corCategoria[categoria]}}
                    onClick={() => setCategoriaSelecionada(categoria)}
                    >
                    {categoria}
                    </button>   
                ))}
            </div>
            
            <div className="product-header">
                <h2 className='in-contrast'>Em Destaque ({produtos.length}) </h2>
                <a href="#"> Ver Todos</a>
            </div>
            <div className='products'>
                <ProductCard limite ={8} categoria={categoriaSelecionada}/>
            </div>
        </main>
        </>
    );
}

export default ProductList ;