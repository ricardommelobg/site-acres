import { Briefcase, Map, LineChart, Handshake, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'ma',
      title: 'Mergers and Acquisitions (M&A)',
      desc: 'Assessoria completa em processos de fusões e aquisições no setor do agronegócio, garantindo a melhor avaliação e negociação para ambas as partes.',
      icon: <Briefcase size={32} />
    },
    {
      id: 'aquisicao',
      title: 'Aquisição de Terras',
      desc: 'Mapeamento estratégico e identificação das melhores áreas de acordo com o perfil e necessidade de produção do investidor.',
      icon: <Map size={32} />
    },
    {
      id: 'banco-terras',
      title: 'Banco de Terras',
      desc: 'Gestão inteligente de portfólios imobiliários rurais, otimizando o uso do solo e garantindo reservas estratégicas para expansão.',
      icon: <Landmark size={32} />
    },
    {
      id: 'avaliacao',
      title: 'Avaliação de Imóveis Rurais',
      desc: 'Laudos técnicos precisos, considerando não apenas a terra, mas benfeitorias, logística e potencial produtivo da região.',
      icon: <LineChart size={32} />
    },
    {
      id: 'venda',
      title: 'Venda de Ativos',
      desc: 'Estratégias de comercialização eficientes, conectando seu ativo a uma rede selecionada de investidores qualificados em todo o Brasil.',
      icon: <Handshake size={32} />
    },
    {
      id: 'arrendamento',
      title: 'Arrendamento de Propriedades',
      desc: 'Estruturação de contratos seguros e rentáveis para proprietários que desejam manter o patrimônio e gerar renda recorrente.',
      icon: <Handshake size={32} />
    }
  ];

  return (
    <div className="services-page fade-in">
      <header className="page-header">
        <div className="container">
          <h1>Nossos Serviços</h1>
          <p className="page-subtitle">Soluções com raízes sólidas para cada etapa do seu negócio rural.</p>
        </div>
      </header>

      <section className="section bg-surface-alt">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <Link to="/contato" className="service-link">
                  Falar com consultor <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Necessita de uma solução personalizada?</h2>
          <p className="text-muted mb-2" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Nossa equipe de especialistas está pronta para entender o seu momento e propor o melhor caminho para o seu patrimônio.
          </p>
          <Link to="/contato" className="btn btn-primary">
            Agendar uma Conversa
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
