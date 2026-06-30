import { Users, History, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about fade-in">
      <header className="page-header">
        <div className="container">
          <h1>Quem Somos</h1>
          <p className="page-subtitle">Nossas raízes são a base da solidez que entregamos a cada cliente.</p>
        </div>
      </header>

      <section className="section">
        <div className="container about-container">
          <div className="about-content">
            <h2 className="text-primary mb-1">Raízes profundas no campo,<br/>solidez em cada negociação.</h2>
            <p className="mb-1 text-muted">
              A Acres é especializada na comercialização de ativos rurais e estruturação de negócios em todo o Brasil. Integramos o Grupo Safras & Cifras, partilhando dos mesmos valores, presença nacional e sólida atuação no agronegócio.
            </p>
            <p className="mb-2 text-muted">
              Somos uma consultoria especializada na compra, venda, avaliação e estruturação de negócios envolvendo ativos rurais. Aliamos pessoas, processos, ampla rede de contatos, entregando soluções seguras e estratégicas durante todo o processo.
            </p>
            
            <div className="about-stats">
              <div className="stat-box">
                <span className="stat-number text-accent">+30</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat-box">
                <span className="stat-number text-accent">100%</span>
                <span className="stat-label">Compromisso</span>
              </div>
              <div className="stat-box">
                <span className="stat-number text-accent">BR</span>
                <span className="stat-label">Atuação Nacional</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
             <img 
               src="https://images.unsplash.com/photo-1592982537447-6f205c08f430?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Equipe no campo" 
               className="rounded-image"
             />
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container">
          <div className="text-center mb-3">
            <h2>Nossos Pilares</h2>
            <p className="text-muted">A base do nosso relacionamento com os clientes</p>
          </div>
          
          <div className="pillars-grid">
            <div className="pillar-card">
              <History size={40} className="text-accent mb-1" />
              <h3>Tradição</h3>
              <p className="text-muted">Conhecimento acumulado e transmitido através de sólidas bases no setor rural.</p>
            </div>
            <div className="pillar-card">
              <Users size={40} className="text-accent mb-1" />
              <h3>Pessoas</h3>
              <p className="text-muted">Nossa rede de contatos é o nosso maior ativo, unindo interesses mútuos com transparência.</p>
            </div>
            <div className="pillar-card">
              <Award size={40} className="text-accent mb-1" />
              <h3>Excelência</h3>
              <p className="text-muted">Busca incessante por resultados precisos, garantindo segurança em cada negociação.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
