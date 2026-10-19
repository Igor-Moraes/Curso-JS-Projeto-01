import './ProductCard.css';
import produtos from '../../data/produtos.json';
import cartPlus from '../../../public/cart-plus.svg';

function ProductCard({limite, categoria}) {
    let listaProdutos = produtos;

    if (categoria) {
        listaProdutos = listaProdutos.filter(
            (produto) => produto.categoria === categoria
        );
    }

    if (limite) {
        listaProdutos = listaProdutos.slice(0, limite);
    }
    
    return (
        <>
            <div className="product-cards">
            {listaProdutos.map((produto) => (
                <div key={produto.id} className="product-card">
                    <img src={produto.imagem} alt={produto.nome} />
                    <button className='add-cart'> <img src={cartPlus} alt="Icone de adicionar item ao carrinho." />
                    </button>

                    <div className="product-info">
                        <p className='product-category'>{produto.categoria}</p>
                        <h2 className='product-name'>{produto.nome}</h2>
                        <p className='product-value'>{produto.preco.toLocaleString("pt-BR", {style : "currency", currency: "BRL"})}</p>
                    </div>
                </div>
            ))} 
        </div>
        </>
    );
}

export default ProductCard;