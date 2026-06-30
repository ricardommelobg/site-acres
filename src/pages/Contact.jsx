import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <header className="page-header">
        <div className="container">
          <h1>Fale Conosco</h1>
          <p className="page-subtitle">Solidez no relacionamento. Confiança em cada conversa.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            
            <div className="contact-info-panel">
              <h2 className="mb-2">Informações de Contato</h2>
              <p className="text-muted mb-2">
                Preencha o formulário ao lado para começar a conversar com um de nossos consultores especializados em estruturação e negócios rurais.
              </p>
              
              <ul className="contact-list">
                <li>
                  <div className="contact-list-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Endereço</h4>
                    <p className="text-muted">Avenida Dois, 100 Parque Una<br />São Gonçalo, Pelotas - RS<br />CEP: 96075-158</p>
                  </div>
                </li>
                <li>
                  <div className="contact-list-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Telefones</h4>
                    <p className="text-muted">Comercial: (53) 3027-8801<br />WhatsApp: (53) 99965-1893</p>
                  </div>
                </li>
                <li>
                  <div className="contact-list-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>E-mail</h4>
                    <p className="text-muted">contato@acres.imb.br</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-form-panel">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input type="text" id="name" placeholder="Seu nome" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefone / WhatsApp</label>
                    <input type="tel" id="phone" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto / Serviço de Interesse</label>
                  <select id="subject" required>
                    <option value="">Selecione uma opção...</option>
                    <option value="ma">M&A (Fusões e Aquisições)</option>
                    <option value="compra">Compra de Fazenda</option>
                    <option value="venda">Venda de Fazenda</option>
                    <option value="avaliacao">Avaliação de Imóvel Rural</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" rows="5" placeholder="Como podemos ajudar?" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Enviar Mensagem
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
