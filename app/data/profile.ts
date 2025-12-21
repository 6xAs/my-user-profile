export type Highlight = {
  title: string;
  description: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type TimelineItem = {
  role: string;
  company: string;
  time: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
};

export type ProfileData = {
  name: string;
  role: string;
  location: string;
  availability: string;
  status: string;
  headlineLead: string;
  headlineAccent: string;
  intro: string;
  summary: string;
  socialLinks: { label: string; url: string }[];
  projectCategories: string[];
  highlights: Highlight[];
  stats: Stat[];
  focusAreas: string[];
  insights: string[];
  stack: string[];
  timeline: TimelineItem[];
  projects: Project[];
  contactEmail: string;
  linkedInLabel: string;
  linkedInUrl: string;
};

export const profileData: ProfileData = {
  name: "Anderson Seixas",
  role: "Analista Programador • Cientista de Dados",
  location: "Brasil · Remoto/Presencial",
  availability: "Disponivel para novos desafios",
  status: "Disponivel para novos desafios",
  headlineLead: "Analista programador e",
  headlineAccent: "cientista de dados",
  intro:
    "Conecto desenvolvimento de software, analytics e ciencia de dados para construir produtos digitais, medir resultados e automatizar decisao. Foco em pipelines confiaveis e experiencias que geram impacto.",
  summary:
    "Atuo na intersecao entre engenharia e dados, com foco em produto, governanca e experiencias digitais escalaveis.",
  socialLinks: [
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "#" },
    { label: "Portfolio", url: "#" },
  ],
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
  highlights: [
    {
      title: "Arquitetura orientada a produto",
      description:
        "Traduzo demandas de negocio em sistemas escalaveis, com foco em impacto e previsibilidade.",
    },
    {
      title: "Dados ponta a ponta",
      description:
        "Pipelines, modelagem e governanca para garantir confianca em analytics e ML.",
    },
    {
      title: "Experimentos com clareza",
      description:
        "Defino metricas, desenho testes e acompanho resultados para decisao rapida.",
    },
  ],
  stats: [
    { label: "Anos em tecnologia", value: "8+" },
    { label: "Produtos entregues", value: "24" },
    { label: "Pipelines em producao", value: "40+" },
    { label: "Dashboards ativos", value: "18" },
  ],
  focusAreas: ["Data platforms", "MLOps", "Observabilidade", "Produto"],
  insights: [
    "Transformo perguntas de negocio em hipoteses com metricas claras.",
    "Equilibro exploracao de dados com entregas rapidas para o time.",
    "Prefiro pipelines simples, auditaveis e com alertas objetivos.",
  ],
  stack: [
    "Python",
    "TypeScript",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Spark",
    "Airflow",
    "dbt",
    "Power BI",
    "Docker",
    "AWS",
    "GCP",
  ],
  timeline: [
    {
      role: "Analista Programador Senior",
      company: "Squad de Plataformas Digitais",
      time: "2022 - agora",
      description:
        "Liderei a modernizacao de servicos e dados com foco em resiliencia, monitoramento e automacao.",
    },
    {
      role: "Cientista de Dados",
      company: "Unidade de Inteligencia",
      time: "2020 - 2022",
      description:
        "Modelei previsoes e segmentacoes, com deploy de modelos e pipelines de features.",
    },
    {
      role: "Analista de Sistemas",
      company: "Operacoes de TI",
      time: "2017 - 2020",
      description:
        "Integrei sistemas legados, desenvolvi APIs e liderei entregas de BI.",
    },
  ],
  projects: [
    {
      title: "Radar de performance operacional",
      description:
        "Monitor em tempo real com alertas inteligentes para indicadores criticos.",
      tags: ["Streaming", "Dashboards", "Observabilidade"],
      category: "Dashboards inteligentes",
    },
    {
      title: "Central de dados confiaveis",
      description:
        "Lakehouse com camadas de qualidade, lineage e catalogo de dados.",
      tags: ["Lakehouse", "Governanca", "DataOps"],
      category: "Plataformas web",
    },
    {
      title: "Previsao de demanda",
      description:
        "Modelos de forecast com cenarios e recomendacoes de estoque.",
      tags: ["ML", "Series temporais", "Experimentacao"],
      category: "Ciencia de dados",
    },
  ],
  contactEmail: "contato@exemplo.com",
  linkedInLabel: "LinkedIn",
  linkedInUrl: "#",
};
