import './Footer.css';
import linkedin from '../../../public/linkedin.svg'
function Footer() {

    return (
        <>
            <footer className='page-footer'> 
            <h2>Store.jsx</h2>
            <a href="#" className='return-top'>Voltar ao topo</a>

            <div className='devs'>
            <h3>Desenvolvedor </h3>
            <div className="dev">
                <a href="https://www.linkedin.com/in/igor-carvalho-de-moraes-651642352" target='_blank'><img src={linkedin} alt="Icone do linkedin" /></a>
                <p>Igor Moraes</p>
            </div>
            </div>

            </footer>
        </>
    );

}

export default Footer;