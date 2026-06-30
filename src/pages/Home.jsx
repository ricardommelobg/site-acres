import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Target, Users, Sprout } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Raízes no campo.<br />
            <span className="text-accent">Solidez nos negócios.</span>
          </h1>
          <p className="hero-subtitle">
            Consultoria especializada em compra, venda, avaliação e estruturação de negócios envolvendo ativos rurais. Com mais de 30 anos de presença sólida no agronegócio brasileiro.
          </p>
          <div className="hero-actions">
            <Link to="/servicos" className="btn btn-accent">
              Nossos Serviços <ArrowRight size={18} />
            </Link>
            <Link to="/contato" className="btn btn-outline hero-btn-outline">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div className="section-header text-center mb-2">
            <span className="badge">Por que a Acres?</span>
            <h2 className="mt-1">Solidez que vem das raízes.</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Integramos o Grupo Safras &amp; Cifras. São mais de 30 anos construindo relações de confiança, entregando soluções estratégicas e seguras no agronegócio nacional.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={32} className="feature-icon" />
              </div>
              <h3 className="feature-title">Segurança Jurídica</h3>
              <p className="feature-desc">Garantimos tranquilidade em todas as etapas de compra, venda e estruturação de ativos rurais.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Target size={32} className="feature-icon" />
              </div>
              <h3 className="feature-title">Precisão na Avaliação</h3>
              <p className="feature-desc">Nossa metodologia de avaliação reflete o verdadeiro valor do seu negócio no mercado atual.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Users size={32} className="feature-icon" />
              </div>
              <h3 className="feature-title">Ampla Rede</h3>
              <p className="feature-desc">Conectamos investidores e proprietários em todo o Brasil, criando as melhores oportunidades (M&A).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="section">
        <div className="container">
          <div className="services-showcase">
            <div className="services-info">
              <h2>Do campo ao contrato:<br/>do início ao fim.</h2>
              <p className="mb-2 text-muted">
                Atuamos de ponta a ponta na cadeia de valor de propriedades rurais. Nossas raízes nos dão a solidez para estruturar cada negócio com segurança e precisão.
              </p>
              <ul className="service-checklist mb-2">
                <li><CheckCircle size={20} className="text-accent" /> Compra e Venda de Fazendas</li>
                <li><CheckCircle size={20} className="text-accent" /> Arrendamento de Propriedades</li>
                <li><CheckCircle size={20} className="text-accent" /> Avaliação de Imóveis Rurais</li>
                <li><CheckCircle size={20} className="text-accent" /> Banco de Terras</li>
              </ul>
              <Link to="/servicos" className="btn btn-primary">
                Ver todos os serviços
              </Link>
            </div>
            <div className="services-image">
              <div className="image-placeholder">
                <Sprout size={80} className="placeholder-icon" />
                <p>Imagem Premium de Agronegócio</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
