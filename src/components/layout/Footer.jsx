import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/banner_topo_acres.jpg" alt="Acres Imobiliária Rural" className="footer-logo-img" />
          </Link>
          <p className="footer-description">
            Consultoria especializada na compra, venda, avaliação e estruturação de negócios envolvendo ativos rurais.
          </p>
          <div className="social-links">
            <a href="http://www.instagram.com/acres.imb" target="_blank" rel="noreferrer" className="social-link"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/company/acres-imb/" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin size={20} /></a>
            <a href="http://www.facebook.com/acres.imb" target="_blank" rel="noreferrer" className="social-link"><FaFacebook size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Navegue</h4>
          <ul>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><a href="https://acres.imb.br/investimentos/">Investimentos</a></li>
            <li><a href="https://acres.imb.br/carreira/">Carreira</a></li>
            <li><Link to="/contato">Fale Conosco</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contato</h4>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Avenida Dois, 100 Parque Una<br/>Pelotas - RS CEP: 96075-158</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>(53) 3027-8801<br/>WhatsApp: (53) 99965-1893</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>contato@acres.imb.br</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>2026 © Todos os direitos reservados – Acres Imobiliária Rural</p>
      </div>
    </footer>
  );
};

export default Footer;
