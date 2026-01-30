export type Highlight = {
  title: string;
  description: string;
  level: string;
  score: number;
  icon: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  icon: string;
};

export type StackItem = {
  name: string;
  score: number;
  icon?: string;
};

export type StackGroup = {
  title: string;
  icon: string;
  items: StackItem[];
};

export type ExperienceEntry = {
  title: string;
  body: string[];
};

export type ProfileData = {
  name: string;
  role: string;
  location: string;
  availability: string;
  avatarSrc: string;
  avatarAlt: string;
  status: string;
  headlineLead: string;
  headlineAccent: string;
  intro: string;
  projectCategories: string[];
  aboutTitle: string;
  aboutBody: string[];
  mission: string;
  aboutFocus: string[];
  highlights: Highlight[];
  stats: Stat[];
  stackGroups: StackGroup[];
  experience: ExperienceEntry[];
  projects: Project[];
  contactEmail: string;
};

export const profileData: ProfileData = {
  name: "Anderson Seixas",
  role: "Analista Programador | Cientista de Dados",
  location: "Brasil · Remoto/Presencial",
  availability: "Disponivel para novos desafios",
  avatarSrc: "/assets/images/foto_son_cut.PNG",
  avatarAlt: "Foto de perfil de Anderson Seixas",
  status: "Disponivel para novos desafios",
  headlineLead: "Analista programador e",
  headlineAccent: "cientista de dados",
  intro:
    "Conecto desenvolvimento de software, dados e pessoas para criar solucoes que funcionam no mundo real.",
  projectCategories: [
    "Todos",
    "Plataformas web",
    "Mobile",
    "Dashboards inteligentes",
    "Ciencia de dados",
    "Automacoes",
    "IA",
    "Projetos web",
  ],
  aboutTitle: "Quem sou eu (versao publica, direta e poderosa)",
  aboutBody: [
    "Sou Analista Programador e Cientista de Dados com mais de 8 anos atuando entre desenvolvimento de software, dados e transformacao digital. Trabalho conectando codigo, dados e pessoas para criar solucoes que funcionam no mundo real, nao so em slides bonitos.",
    "Atuo desde a base tecnica - arquitetura, backend, pipelines de dados, automacoes - ate a camada estrategica, apoiando tomada de decisao com metricas, indicadores e modelos analiticos. Ja desenvolvi aplicacoes web, dashboards analiticos, sistemas internos, plataformas educacionais gamificadas e solucoes orientadas a dados para governo, educacao e pesquisa.",
    "Tenho forte atuacao em educacao tecnologica, ciencia de dados aplicada e inovacao no setor publico, sempre com um pe na engenharia e outro no impacto social. Se o problema é complexo, melhor ainda - desafios são de longe o meu passatempo.",
  ],
  mission:
    "Missao pessoal: transformar dados e software em decisoes melhores, processos mais inteligentes e aprendizado mais envolvente.",
  aboutFocus: ["Engenharia", "Dados", "Educacao", "Setor publico"],
  highlights: [
    {
      title: "Arquitetura orientada a produto",
      description:
        "Traduzo demandas de negocio em sistemas escalaveis, com foco em impacto e previsibilidade.",
      level: "Avancado",
      score: 92,
      icon: "account_tree",
    },
    {
      title: "Dados ponta a ponta",
      description:
        "Pipelines, modelagem e governanca para garantir confianca em analytics e ML.",
      level: "Especialista",
      score: 95,
      icon: "insights",
    },
    {
      title: "Experimentos com clareza",
      description:
        "Defino metricas, desenho testes e acompanho resultados para decisao rapida.",
      level: "Avancado",
      score: 88,
      icon: "tune",
    },
  ],
  stats: [
    { label: "Anos em tecnologia", value: "10" },
    { label: "Produtos entregues", value: "12" },
    { label: "Pipelines em producao", value: "9" },
    { label: "Dashboards ativos", value: "2" },
  ],
  stackGroups: [
    {
      title: "Desenvolvimento",
      icon: "code",
      items: [
        {
          name: "Python (Pandas, Streamlit, automacoes, scripts, APIs)",
          score: 92,
          icon: "python",
        },
        { name: "PHP (Laravel)", score: 80, icon: "php" },
        { name: "JavaScript / TypeScript", score: 88, icon: "javascript" },
        { name: "Node.js", score: 84, icon: "node.js" },
        {
          name: "HTML5, CSS3, Bootstrap, Tailwind",
          score: 86,
          icon: "html5",
        },
        { name: "Next.js (App Router)", score: 82, icon: "next.js" },
      ],
    },
    {
      title: "Dados & Analytics",
      icon: "query_stats",
      items: [
        { name: "Ciencia de Dados aplicada", score: 90, icon: "ciencia" },
        { name: "Analise Exploratoria (EDA)", score: 88, icon: "eda" },
        {
          name: "Dashboards interativos (Streamlit, Plotly)",
          score: 86,
          icon: "dashboards",
        },
        { name: "Modelagem preditiva", score: 82, icon: "modelagem" },
        {
          name: "Indicadores e metricas para gestao",
          score: 85,
          icon: "indicadores",
        },
        {
          name: "Integracao e tratamento de dados (CSV, APIs, Firestore, SQL)",
          score: 88,
          icon: "integracao",
        },
      ],
    },
    {
      title: "Infra, DevOps & Automacao",
      icon: "engineering",
      items: [
        { name: "Docker e Docker Compose", score: 80, icon: "docker" },
        { name: "Linux (Ubuntu, WSL)", score: 84, icon: "linux" },
        { name: "Nginx", score: 72, icon: "nginx" },
        { name: "Apache Airflow", score: 78, icon: "airflow" },
        { name: "n8n (automacoes)", score: 76, icon: "n8n" },
        { name: "Firebase / Firestore", score: 74, icon: "firebase" },
        { name: "Git & GitHub", score: 86, icon: "github" },
      ],
    },
    {
      title: "Educacao & Inovacao",
      icon: "school",
      items: [
        { name: "Gamificacao educacional", score: 88, icon: "gamificacao" },
        { name: "Metodologias ativas", score: 82, icon: "metodologias" },
        {
          name: "Projetos interdisciplinares",
          score: 85,
          icon: "projetos",
        },
        {
          name: "Plataformas educacionais digitais",
          score: 83,
          icon: "plataformas",
        },
        {
          name: "Divulgacao cientifica e tecnologica",
          score: 80,
          icon: "divulgacao",
        },
      ],
    },
  ],
  experience: [
    {
      title: "Iniciei minha trajetória profissional aos 14 anos como menor aprendiz",
      body: [
        "Conciliei trabalho e cursos no Senac enquanto construía disciplina e visão prática de mundo corporativo.",
        "Antes de entrar na tecnologia, atuei em comércio e vendas, experiências que reforçaram minha resiliência e senso de urgência.",
      ],
    },
    {
      title: "Minha entrada na Tecnologia da Informação veio pelo Design Gráfico",
      body: [
        "Desenvolvi a habilidade desde a infância e atuei como designer e arte-finalista em empresas de personalização de camisetas enquanto cursava Sistemas para Internet.",
        "Nesses ambientes comecei a criar soluções tecnológicas e automações que trouxeram ganhos significativos aos processos de gestão.",
      ],
    },
    {
      title: "Passei a oferecer serviços de desenvolvimento de software para pequenas empresas",
      body: [
        "Essa fase consolidou minha atuação como desenvolvedor autônomo e me levou a migrar para a docência em instituições como o Senac e o Instituto Federal de Rondônia.",
      ],
    },
    {
      title: "Atuação atual no Governo de Rondônia foca em Ciência de Dados, Inovação e Automação de Processos",
      body: [
        "Aplico tecnologia para gerar impacto e eficiência no setor público, unindo dados, automações e inovação aberta.",
      ],
    },
  ],
  projects: [
    {
      title: "Aplicacoes em Ciencia de Dados na Area Meteorologica",
      description:
        "Solucoes analiticas para coleta, tratamento, analise e visualizacao de dados meteorologicos e ambientais, com foco em monitoramento, previsao e suporte a decisao.",
      tags: ["Ciencia de dados", "Analise ambiental", "Previsao"],
      category: "Ciencia de dados",
      icon: "cloud",
    },
    {
      title: "Automacoes com Apache Airflow e n8n",
      description:
        "Fluxos automatizados para orquestracao de dados, integracao entre sistemas e eliminacao de tarefas manuais, garantindo rastreabilidade e escalabilidade.",
      tags: ["Automacoes", "Pipelines", "Orquestracao"],
      category: "Automacoes",
      icon: "hub",
    },
    {
      title: "Plataformas Web Governamentais",
      description:
        "Desenvolvimento e modernizacao de plataformas digitais para o setor publico, com foco em experiencia do usuario, transparencia e transformacao digital.",
      tags: ["Governo digital", "UX", "Servicos"],
      category: "Plataformas web",
      icon: "public",
    },
    {
      title: "Sistemas Integrados a APIs para Gestao Interna",
      description:
        "Sistemas internos que consomem e disponibilizam APIs para integrar aplicacoes, bases de dados e servicos, reduzindo retrabalho.",
      tags: ["Integracao", "APIs", "Gestao"],
      category: "Projetos web",
      icon: "integration_instructions",
    },
    {
      title: "Interoperabilidade de Sistemas",
      description:
        "Projetos para comunicacao entre sistemas heterogeneos, promovendo consistencia de dados e fluxo continuo de informacoes.",
      tags: ["Interoperabilidade", "Dados", "Arquitetura"],
      category: "Projetos web",
      icon: "swap_horiz",
    },
  ],
  contactEmail: "anderson.6xas@gmail.com",
};
