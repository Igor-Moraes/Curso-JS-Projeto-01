import Cart from '../../../public/cart2.svg';
import Principal from '../../../public/principal.png';
import './Header.css'
function Header() {

    return (
        <>
        <header>
            <div className="search">
            <h2> Store.jsx</h2>
            <input type="text" placeholder='Buscar produtos e categorias'/>
            <button className='btn-search'>Buscar</button>

            <div className="cart-search">
                <button className='btn-login'>Entrar</button>
                <button className='btn-cart'><img src={Cart} alt="Iconé de um carrinho de compras" /></button>
            </div>
            </div>

            <div className="header-container"> 
            <div className="header-left">
                <h1>Tudo o que você precisa, em um só lugar.</h1>
                <p>Entrega rápida, grande variedade de produtos e diversas formas de pagamento.</p>

                <div className="btn-header">
                    <button className='btn-offers'>Ver ofertas</button>
                    <button className='btn-categories'>Explorar Categorias</button>
                </div>
            </div>

            <div className='header-right'>
            <img src={Principal} alt="Imagem referente a loja, mostra um botão de comprar em um teclado de computador." />

            </div>

            </div>
        </header>
        </>
    )
}

export default Header;