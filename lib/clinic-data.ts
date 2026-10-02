export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: {
    baseRange: string;
    factors: string[];
    whatIsIncluded: string[];
    note: string;
  };
  beforeAfterCase: {
    category: string;
    clinicalContext: string;
    beforeLabel: string;
    afterLabel: string;
    beforeImage: string;
    afterImage: string;
    timeframe: string;
  };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear: number;
  primaryLocation: {
    street: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    directions: string;
    landmarks: string;
  coordinates?: { lat: number; lng: number };
  };
  contact: {
    phone: string;
    emergencyPhone: string;
  email?: string;
    whatsapp: string;
  };
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: "EODONTO Clínica Odontológica",
  legalName: "EODONTO CLÍNICA ODONTOLÓGICA LTDA",
  tagline: "Clínica odontológica no Millenium Shopping, Chapada, Manaus.",
  establishedYear: 2018,
  primaryLocation: {
    street: "Av Djalma Batista, 1661",
    suite: "Millenium Shopping, Torre Medical, Sl 301",
    city: "Manaus",
    state: "AM",
    postalCode: "69050-970",
    country: "Brazil",
    directions: "Av Djalma Batista, 1661 - Millenium Shopping, Torre Medical, Sl 301 - Chapada, Manaus - AM, 69050-970, Brazil",
    landmarks: "VXXF+CR Chapada, Manaus - Amazonas, Brazil",
  },
  contact: {
    phone: "+55 92 99148-7679",
    emergencyPhone: "+55 92 99148-7679",
    whatsapp: "+55 92 99148-7679",
  },
  schedule: [
    { day: "Segunda-feira", hours: "8:00–19:00" },
    { day: "Terça-feira", hours: "8:00–19:00" },
    { day: "Quarta-feira", hours: "8:00–19:00" },
    { day: "Quinta-feira", hours: "8:00–19:00" },
    { day: "Sexta-feira", hours: "8:00–19:00" },
    { day: "Sábado", hours: "8:00–12:00" },
    { day: "Domingo", hours: "Fechado" },
  ],
  verifiedStats: [
    { value: 4.6, suffix: " ★", label: "Avaliação no Google", description: "Nota 4.6 com base em 10 avaliações no Google Maps." },
    { value: 10, suffix: "", label: "Avaliações no Google", description: "10 avaliações compartilhadas no Google Maps." },
  ],
  accreditations: [
    "Clínica odontológica em Manaus, Amazonas",
    "Atendimento conforme informações da clínica",
    "Avaliação 4.6 Estrelas no Google Maps · 10 avaliações",
    "Chapada, Manaus - AM",
  ],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: "dental-studio-doctor",
    slug: "dental-studio-doctor",
    name: "Dra. Fernanda",
    title: "Dentista",
    qualifications: "",
    specialization: "Atendimento odontológico",
    experienceYears: 0,
    bio: "A Dra. Fernanda atende na EODONTO Clínica Odontológica, em Manaus.",
    philosophy: "Atendimento acolhedor, respeitoso e atento às necessidades de cada paciente.",
    education: ["Informações profissionais serão adicionadas em breve."],
    memberships: [],
    specialties: ["Atendimento odontológico"],
    image: "/images/dra-fernanda.png",
    warmImage: "/images/dra-fernanda.png",
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants & Carga Imediata",
    navLabel: "Dental Implants",
    tagline: "Implantes carga imediata pode trazer seu sorriso em 1 dia com fixação precisa em titânio e zircônia.",
    shortDescription: "Substituição definitiva de dentes com tecnologia de carga imediata que pode devolver seu sorriso e mastigação em apenas 1 dia.",
    clinicalExplanation: "Os implantes dentários do Dental Studio utilizam fixações de titânio biocompatível e zircônia com planejamento de ponta. Com a técnica de carga imediata, o paciente pode recuperar seu sorriso e conforto mastigatório em 1 dia, com total estabilidade e estética natural sem desgastar dentes sadios adjacentes.",
    whoNeeds: [
      "Pacientes com perda de um ou mais dentes por cárie, trauma ou retração.",
      "Pessoas que buscam dentes fixos e recuperação rápida através de implantes de carga imediata em 1 dia.",
      "Usuários de próteses móveis que desejam segurança e firmeza ao falar e mastigar.",
      "Pacientes que necessitam de atendimento no consultório ou odontologia domiciliar.",
    ],
    benefits: [
      "Carga imediata que pode restaurar o sorriso e a mastigação em 1 dia.",
      "Restaura mais de 95% da eficiência mastigatória natural sem incômodos.",
      "Preserva a estrutura óssea facial e evita o envelhecimento precoce dos maxilares.",
      "Índice de sucesso clínico e osseointegração superior a 98%.",
    ],
    indications: [
      { condition: "Perda Unitária", explanation: "Implante individual com coroa estética em zircônia preservando dentes vizinhos." },
      { condition: "Perda Múltipla", explanation: "Pontes fixas sobre implantes com excelente sustentação e harmonia." },
      { condition: "Protocolo Total com Carga Imediata", explanation: "Reabilitação de arcada completa fixa em 1 dia com estabilidade imediata." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Avaliação Tomográfica 3D & Planejamento",
        duration: "45 minutos",
        description: "Exames de imagem detalhados para mapeamento da estrutura óssea e definição da técnica de carga imediata.",
        clinicalDetails: "Planejamento cirúrgico guiado para máxima precisão e segurança durante o procedimento.",
      },
      {
        stepNumber: 2,
        title: "Instalação do Implante & Carga Imediata",
        duration: "60–90 minutos",
        description: "Procedimento realizado com anestesia local de alta eficácia e conforto total pela equipe odontológica.",
        clinicalDetails: "Verificação da estabilidade primária imediata para fixação do elemento protético.",
      },
      {
        stepNumber: 3,
        title: "Adaptação e Recuperação do Sorriso em 1 Dia",
        duration: "1 dia",
        description: "Instalação da prótese provisória/imediata possibilitando retorno rápido às atividades com novo sorriso.",
        clinicalDetails: "Acompanhamento pós-operatório atencioso com orientações claras de higiene e cicatrização.",
      },
      {
        stepNumber: 4,
        title: "Finalização Estética Definitiva",
        duration: "45 minutos",
        description: "Instalação da prótese definitiva em cerâmica de alta resistência com acabamento perfeito.",
        clinicalDetails: "Ajuste oclusal milimétrico para conforto absoluto e durabilidade por décadas.",
      },
    ],
    recoveryTimeline: [
      { period: "Primeiras 24 Horas", expectedSensations: "Conforto pós-operatório excelente com medicação prescrita.", careProtocol: "Alimentos pastosos e frios, repouso leve e higiene orientada." },
      { period: "Dias 2 a 7", expectedSensations: "Cicatrização rápida dos tecidos gengivais.", careProtocol: "Higienização cuidadosa e bochechos suaves conforme orientação." },
      { period: "Acompanhamento Contínuo", expectedSensations: "Sensação idêntica aos dentes naturais.", careProtocol: "Consultas de rotina semestrais para manutenção preventiva." },
    ],
    costTransparency: {
      baseRange: "Valores personalizados com excelente custo-benefício em Manaus",
      factors: [
        "Complexidade cirúrgica e necessidade de enxerto ósseo prévio.",
        "Tipo de material protético escolhido (zircônia pura, metalocerâmica).",
        "Técnica de carga imediata em 1 dia e número de elementos.",
      ],
      whatIsIncluded: [
        "Avaliação clínica completa e planejamento digital",
        "Instalação cirúrgica pela equipe odontológica",
        "Componentes e implantes certificados de alta qualidade",
        "Acompanhamento pós-operatório atencioso",
      ],
      note: "Oferecemos orçamentos transparentes e condições facilitadas para o seu tratamento.",
    },
    beforeAfterCase: {
      category: "Implante com Carga Imediata",
      clinicalContext: "Paciente restaurado com implante dentário de carga imediata pela equipe odontológica, recuperando sorriso e função em 1 dia.",
      beforeLabel: "Pré-operatório: Ausência Dentária",
      afterLabel: "Pós-operatório: Sorriso Recuperado em 1 Dia",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "Tratamento com Carga Imediata",
    },
    assignedDentistId: "dental-studio-doctor",
    faqs: [
      {
        question: "Como funciona o implante de carga imediata em 1 dia?",
        answer: "A técnica de carga imediata permite que a fixação do implante e a colocação do dente ocorram no mesmo dia ou em até 24 a 48 horas, quando há estabilidade óssea adequada.",
      },
      {
        question: "O procedimento de implante dentário dói?",
        answer: "Não. A cirurgia é feita sob anestesia local moderna e eficaz, garantindo que o paciente não sinta dor durante todo o processo.",
      },
      {
        question: "O consultório oferece atendimento domiciliar?",
        answer: "Sim! A equipe odontológica disponibiliza atendimento de odontologia domiciliar com estrutura portátil especializada para pacientes com mobilidade reduzida.",
      },
    ],
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    navLabel: "Root Canal",
    tagline: "Tratamento endodôntico seguro e confortável para preservar dentes naturais e eliminar a dor.",
    shortDescription: "Procedimento endodôntico avançado para remoção de infecções na polpa dentária, esterilização dos canais e alívio imediato do desconforto.",
    clinicalExplanation: "O tratamento de canal é realizado quando a polpa dentária sofre inflamação ou infecção por cárie profunda ou trauma. A equipe odontológica utiliza instrumentos rotatórios e técnicas modernas para limpar, descontaminar e selar o canal com segurança e suavidade, preservando o dente natural.",
    whoNeeds: [
      "Dor de dente intensa, espontânea ou pulsátil.",
      "Sensibilidade prolongada a alimentos quentes ou frios.",
      "Inchaço na gengiva ou histórico de fratura dental com exposição do nervo.",
      "Cáries profundas diagnosticadas clinicamente.",
    ],
    benefits: [
      "Alívio imediato da dor e erradicação do foco infeccioso.",
      "Preserva a raiz dentária natural e a estrutura da arcada.",
      "Evita a necessidade de extração dentária.",
      "Procedimento rápido, seguro e indolor.",
    ],
    indications: [
      { condition: "Pulpite Irreversível", explanation: "Inflamação da polpa dental tratada com desinfecção completa do canal." },
      { condition: "Abscesso Dentário", explanation: "Controle da infecção periapical e descompressão do canal." },
      { condition: "Trauma Dental", explanation: "Tratamento preventivo e reconstrutor de dentes lesionados." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Diagnóstico Radiográfico & Anestesia",
        duration: "20 minutos",
        description: "Exame minucioso da anatomia dos canais e anestesia local para conforto completo.",
        clinicalDetails: "Isolamento absoluto para ambiente estéril durante todo o procedimento.",
      },
      {
        stepNumber: 2,
        title: "Limpeza & Instrumentação Rotatória",
        duration: "40 minutos",
        description: "Remoção precisa do tecido inflamado e modelagem suave dos canais radiculares pela equipe odontológica.",
        clinicalDetails: "Localizador apical eletrônico para garantir o comprimento de trabalho ideal.",
      },
      {
        stepNumber: 3,
        title: "Irrigação & Desinfecção Profunda",
        duration: "20 minutos",
        description: "Eliminação de bactérias através de substâncias biocompatíveis de alta eficácia.",
        clinicalDetails: "Descontaminação completa sem agressão aos tecidos periapicais.",
      },
      {
        stepNumber: 4,
        title: "Obturação Biocompatível & Selamento",
        duration: "30 minutos",
        description: "Preenchimento hermético do canal com guta-percha e cimento endodôntico protetor.",
        clinicalDetails: "Restauração coronária para devolver função e resistência mastigatória.",
      },
    ],
    recoveryTimeline: [
      { period: "Primeiras Horas", expectedSensations: "Sensação de alívio da dor original; dormência passageira da anestesia.", careProtocol: "Aguardar o efeito anestésico passar antes de mastigar alimentos sólidos." },
      { period: "Dias 1 a 3", expectedSensations: "Sensibilidade leve à mastigação, facilmente controlada com analgésico.", careProtocol: "Higiene oral normal e mastigação suave no local tratado." },
      { period: "Após Restauração", expectedSensations: "Dente saudável, funcional e totalmente sem dor.", careProtocol: "Manter acompanhamento clínico de rotina." },
    ],
    costTransparency: {
      baseRange: "Valores justos e excelente custo-benefício em Manaus",
      factors: [
        "Número de raízes e canais do dente (anterior, pré-molar ou molar).",
        "Grau de calcificação ou necessidade de retratamento.",
      ],
      whatIsIncluded: [
        "Radiografias periapicais de diagnóstico e controle",
        "Instrumentação rotatória e obturação pela equipe odontológica",
        "Curativo antimicrobiano e selamento provisório",
      ],
      note: "Condições facilitadas e atendimento prioritário para alívio da dor.",
    },
    beforeAfterCase: {
      category: "Tratamento Endodôntico",
      clinicalContext: "Paciente com dor aguda atendido com tratamento de canal moderno e seguro pela equipe odontológica.",
      beforeLabel: "Pré-tratamento: Lesão Periapical e Dor",
      afterLabel: "Pós-tratamento: Canal Selado & Dente Salvo",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "Sessão Confortável",
    },
    assignedDentistId: "dental-studio-doctor",
    faqs: [
      {
        question: "Tratamento de canal dói?",
        answer: "Não! Com as técnicas anestésicas modernas empregadas no consultório, o procedimento é completamente indolor e traz alívio para quem estava com dor.",
      },
      {
        question: "Quantas sessões são necessárias?",
        answer: "A maioria dos tratamentos de canal pode ser realizada em sessão única ou no máximo duas sessões, dependendo da condição infecciosa.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    navLabel: "Teeth Whitening",
    tagline: "Clareamento dental seguro e monitorado para um sorriso iluminado com proteção ao esmalte.",
    shortDescription: "Técnicas de clareamento em consultório e caseiro supervisionado para remoção de manchas e rejuvenescimento do sorriso sem agredir os dentes.",
    clinicalExplanation: "O clareamento dental no Dental Studio utiliza géis clareadores certificados e proteção gengival rigorosa. Supervisionado pela equipe odontológica, o procedimento quebra moléculas de pigmentos acumuladas por café, chá e tempo sem alterar a densidade mineral do esmalte.",
    whoNeeds: [
      "Pessoas com dentes amarelados ou escurecidos por alimentação e hábitos diários.",
      "Pacientes que desejam valorizar o sorriso para eventos e autoestima.",
      "Quem busca um clareamento seguro com supervisão profissional.",
    ],
    benefits: [
      "Clareia vários tons de forma uniforme e natural.",
      "Fórmulas com agentes dessensibilizantes para conforto durante o tratamento.",
      "Resultados duradouros e estética brilhante.",
    ],
    indications: [
      { condition: "Manchas Extrínsecas", explanation: "Remoção de pigmentos de café, refrigerantes e corantes alimentares." },
      { condition: "Escurecimento por Idade", explanation: "Rejuvenescimento do esmalte dental com brilho uniforme." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Avaliação da Cor Inicial & Higienização",
        duration: "20 minutos",
        description: "Registro da escala de cor e profilaxia prévia para máxima absorção do gel clareador.",
        clinicalDetails: "Verificação da integridade das restaurações e saúde gengival.",
      },
      {
        stepNumber: 2,
        title: "Aplicação da Barreira Gengival",
        duration: "15 minutos",
        description: "Isolamento cuidadoso da gengiva para proteger os tecidos moles.",
        clinicalDetails: "Polimerização da barreira fotoprotetora para segurança total.",
      },
      {
        stepNumber: 3,
        title: "Aplicação do Gel Clareador",
        duration: "3 ciclos de 15 minutos",
        description: "Aplicação do gel de alta eficiência para liberação de oxigênio clareador.",
        clinicalDetails: "Ação direta nos pigmentos com controle térmico e biológico.",
      },
      {
        stepNumber: 4,
        title: "Dessensibilização & Polimento Final",
        duration: "15 minutos",
        description: "Remoção do gel, aplicação de agente remineralizante e orientações.",
        clinicalDetails: "Instruções dietéticas para garantir a fixação do resultado nos primeiros dias.",
      },
    ],
    recoveryTimeline: [
      { period: "Primeiras 24 Horas", expectedSensations: "Sorriso visivelmente mais claro; eventual sensibilidade leve e transitória.", careProtocol: "Evitar alimentos e bebidas muito pigmentadas (café, açaí, vinho)." },
      { period: "Dias 2 a 7", expectedSensations: "Cor definitiva estabilizada com brilho radiante.", careProtocol: "Escovação diária normal com cerdas macias." },
    ],
    costTransparency: {
      baseRange: "Planos acessíveis para clareamento em consultório ou caseiro",
      factors: ["Opção de clareamento de consultório, moldeiras personalizadas ou combo."],
      whatIsIncluded: [
        "Avaliação inicial e registro de escala de cor",
        "Sessão completa em consultório com barreira gengival",
        "Agente dessensibilizante pós-clareamento",
      ],
      note: "Excelente custo-benefício para transformar a estética do seu sorriso.",
    },
    beforeAfterCase: {
      category: "Clareamento Dental",
      clinicalContext: "Paciente com escurecimento dental restaurado para um tom brilhante e natural pela equipe odontológica.",
      beforeLabel: "Pré-tratamento: Dentes Amarelados",
      afterLabel: "Pós-tratamento: Sorriso Iluminado",
      beforeImage: "/images/teeth-whitening-before.jpg",
      afterImage: "/images/teeth-whitening-after.jpg",
      timeframe: "Sessão em Consultório",
    },
    assignedDentistId: "dental-studio-doctor",
    faqs: [
      { question: "O clareamento enfraquece os dentes?", answer: "Não! O clareamento profissional não desgasta nem prejudica a estrutura do esmalte." },
      { question: "Quanto tempo dura o clareamento?", answer: "Com bons hábitos de higiene e profilaxia periódica, o resultado dura entre 1 a 2 anos." },
    ],
  },
  {
    slug: "dental-cleaning",
    name: "Dental Cleaning & Periodontal Care",
    navLabel: "Dental Cleaning",
    tagline: "Profilaxia, raspagem ultrassônica e cuidado gengival preventivo.",
    shortDescription: "Limpeza dental profissional com ultrassom e polimento coronário para eliminação do tártaro, placa bacteriana e prevenção de gengivite.",
    clinicalExplanation: "A profilaxia e raspagem periodontal removem tártaro acumulado e biofilme bacteriano. Conduzida com atenção minuciosa pela equipe odontológica, a limpeza dental previne sangramentos, retração gengival e perda óssea, mantendo seu hálito fresco e gengivas saudáveis.",
    whoNeeds: [
      "Todos os pacientes a cada 6 meses para manutenção preventiva.",
      "Pessoas com sangramento ao escovar ou passar fio dental.",
      "Pacientes com acúmulo visível de tártaro e manchas superficiais.",
    ],
    benefits: [
      "Elimina sangramento gengival e previne periodontite.",
      "Combate o mau hálito e remove manchas externas.",
      "Deixa os dentes limpos, lisos e protegidos.",
    ],
    indications: [
      { condition: "Profilaxia Preventiva", explanation: "Manutenção periódica para saúde bucal contínua." },
      { condition: "Gengivite", explanation: "Remoção de placa e controle do processo inflamatório." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Exame Clínico & Avaliação Periodontal",
        duration: "15 minutos",
        description: "Avaliação do índice de placa, tártaro e saúde gengival.",
        clinicalDetails: "Identificação de áreas de acúmulo e orientação personalizada.",
      },
      {
        stepNumber: 2,
        title: "Raspagem Ultrassônica Confortável",
        duration: "25 minutos",
        description: "Remoção do tártaro supra e subgengival com pontas ultrassônicas delicadas.",
        clinicalDetails: "Irrigação suave para conforto absoluto durante o procedimento.",
      },
      {
        stepNumber: 3,
        title: "Polimento Coronário & Jato Profilático",
        duration: "15 minutos",
        description: "Remoção de manchas extrínsecas e alisamento da superfície dental.",
        clinicalDetails: "Pasta profilática especial com micropartículas de brilho.",
      },
      {
        stepNumber: 4,
        title: "Aplicação de Flúor",
        duration: "10 minutos",
        description: "Aplicação tópica de flúor para remineralização e proteção.",
        clinicalDetails: "Orientações práticas de higiene oral para o dia a dia.",
      },
    ],
    recoveryTimeline: [
      { period: "Primeiras Horas", expectedSensations: "Sensação imediata de dentes limpos e hálito fresco.", careProtocol: "Aguardar 30 minutos após o flúor para comer ou beber." },
      { period: "Manutenção", expectedSensations: "Gengivas saudáveis sem sangramento.", careProtocol: "Escovação 3x ao dia e uso diário do fio dental." },
    ],
    costTransparency: {
      baseRange: "Preço justo e acessível em Manaus",
      factors: ["Profilaxia simples de rotina vs. raspagem periodontal profunda."],
      whatIsIncluded: [
        "Avaliação completa da saúde bucal",
        "Raspagem com ultrassom e profilaxia",
        "Aplicação de flúor e orientações de escovação",
      ],
      note: "A prevenção periódica evita tratamentos complexos no futuro.",
    },
    beforeAfterCase: {
      category: "Saúde Gengival",
      clinicalContext: "Remoção completa de placa e cálculo dental com recuperação da saúde gengival pela equipe odontológica.",
      beforeLabel: "Pré-tratamento: Tártaro & Inflamação",
      afterLabel: "Pós-tratamento: Gengiva Rosa & Saudável",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "Sessão Rápida",
    },
    assignedDentistId: "dental-studio-doctor",
    faqs: [
      { question: "Com que frequência devo fazer limpeza dental?", answer: "O recomendado é a cada 6 meses, ou a cada 3 a 4 meses em casos de tendência a problemas periodontais." },
      { question: "A limpeza com ultrassom desgasta o dente?", answer: "Não, o ultrassom apenas vibra na frequência ideal para soltar o tártaro sem afetar o esmalte." },
    ],
  },
  {
    slug: "braces",
    name: "Aparelhos Ortodônticos & Aligners",
    navLabel: "Braces & Orthodontics",
    tagline: "Aparelhos ortodônticos convencionais, estéticos e alinhadores para o alinhamento ideal do seu sorriso.",
    shortDescription: "Tratamento ortodôntico completo em Manaus com aparelhos metálicos, cerâmicos e alinhadores invisíveis para corrigir apinhamento, mordida e estética facial.",
    clinicalExplanation: "O tratamento com aparelhos ortodônticos corrige o posicionamento dos dentes e das bases ósseas, proporcionando uma mordida equilibrada e um sorriso harmônico. Na Dental Studio, A equipe odontológica oferece opções metálicas, estéticas e alinhadores modernos.",
    whoNeeds: [
      "Dentes tortos, apinhados ou com espaços (diastemas).",
      "Problemas de mordida cruzada, sobremordida ou mordida aberta.",
      "Crianças, jovens e adultos que buscam estética e melhora na mastigação.",
    ],
    benefits: [
      "Alinha os dentes e equilibra as forças da mastigação.",
      "Facilita a higienização bucal e previne cáries e problemas periodontais.",
      "Transforma a harmonia do rosto e a confiança ao sorrir.",
    ],
    indications: [
      { condition: "Apinhamento Dentário", explanation: "Alinhamento de dentes sobrepostos com aparelhos modernos." },
      { condition: "Correção de Mordida", explanation: "Ajuste funcional da oclusão para evitar desgaste dentário e dores na ATM." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Documentação Ortodôntica & Planejamento",
        duration: "45 minutos",
        description: "Análise de radiografias, fotografias e moldes para definir o plano ideal.",
        clinicalDetails: "Apresentação detalhada do tipo de aparelho mais adequado às suas metas.",
      },
      {
        stepNumber: 2,
        title: "Instalação do Aparelho Ortodôntico",
        duration: "60 minutos",
        description: "Colocação dos bráquetes ou entrega da primeira sequência de alinhadores.",
        clinicalDetails: "Início suave das forças biológicas de movimentação dentária.",
      },
      {
        stepNumber: 3,
        title: "Consultas de Manutenção Mensais",
        duration: "30 minutos",
        description: "Troca de arcos, ativação das forças e acompanhamento da evolução.",
        clinicalDetails: "Ajustes progressivos para atingir o alinhamento planejado.",
      },
      {
        stepNumber: 4,
        title: "Remoção & Contenção Ortodôntica",
        duration: "45 minutos",
        description: "Remoção do aparelho, profilaxia e instalação das contenções para manter o resultado.",
        clinicalDetails: "Estabilidade definitiva do novo sorriso.",
      },
    ],
    recoveryTimeline: [
      { period: "Primeiros Dias", expectedSensations: "Pressão leve e adaptação inicial aos bráquetes.", careProtocol: "Alimentos macios e uso de cera protetora se necessário." },
      { period: "Ao Longo do Tratamento", expectedSensations: "Evolução visível no alinhamento mês a mês.", careProtocol: "Higienização cuidadosa com escova ortodôntica e fio dental." },
    ],
    costTransparency: {
      baseRange: "Mensalidades acessíveis e condições facilitadas em Manaus",
      factors: ["Tipo de aparelho (metálico convencional, estético de safira/cerâmica ou alinhador)."],
      whatIsIncluded: [
        "Planejamento ortodôntico completo",
        "Instalação e manutenções periódicas",
        "Acompanhamento odontológico dedicado",
      ],
      note: "Condições que cabem no seu orçamento para toda a família.",
    },
    beforeAfterCase: {
      category: "Ortodontia",
      clinicalContext: "Correção completa de apinhamento e mordida com aparelho ortodôntico em Manaus.",
      beforeLabel: "Pré-tratamento: Dentes Apinhados",
      afterLabel: "Pós-tratamento: Arcada Alinhada e Harmônica",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "Acompanhamento Dedicado",
    },
    assignedDentistId: "dental-studio-doctor",
    faqs: [
      { question: "Adultos podem usar aparelho ortodôntico?", answer: "Sim! Não há limite de idade para a movimentação dentária com saúde periodontal." },
      { question: "Quanto tempo dura o tratamento ortodôntico?", answer: "Em média entre 12 a 24 meses, dependendo da complexidade de cada caso e da assiduidade nas consultas." },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry & Facetas",
    navLabel: "Cosmetic Dentistry",
    tagline: "Lentes de contato dental, facetas em resina e cerâmica com planejamento estético.",
    shortDescription: "Reabilitação estética personalizada para transformar forma, cor e alinhamento do sorriso com naturalidade e alta resistência.",
    clinicalExplanation: "A odontologia estética no Dental Studio combina arte, precisão e materiais de alta tecnologia. Conduzido pela equipe odontológica, o tratamento com facetas e restaurações estéticas reproduz a textura e translucidez do esmalte natural com mínima intervenção.",
    whoNeeds: [
      "Dentes desgastados, fraturados ou com formato irregular.",
      "Manchas resistentes que não saem com clareamento convencional.",
      "Pessoas que desejam um sorriso simétrico e radiante.",
    ],
    benefits: [
      "Transformação estética de alto impacto com naturalidade.",
      "Materiais nobres de alta durabilidade e resistência ao manchamento.",
      "Procedimento planejado de acordo com o formato facial do paciente.",
    ],
    indications: [
      { condition: "Facetas e Lentes de Contato", explanation: "Lâminas cerâmicas ultrafinas para correção de cor e forma." },
      { condition: "Restaurações em Resina Estética", explanation: "Fechamento de espaços e reparos rápidos com resinas de alta tecnologia." },
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: "Planejamento Estético & Mock-up",
        duration: "45 minutos",
        description: "Análise do sorriso e simulação prévia para visualização do resultado.",
        clinicalDetails: "Aprovação do desenho do sorriso junto ao paciente.",
      },
      {
        stepNumber: 2,
        title: "Preparo Conservador & Moldagem/Escaneamento",
        duration: "90 minutos",
        description: "Preparo minimamente invasivo preservando o máximo de estrutura dental pela equipe odontológica.",
        clinicalDetails: "Moldagem de precisão enviada para laboratório especializado.",
      },
      {
        stepNumber: 3,
        title: "Confecção das Peças Cerâmicas",
        duration: "Etapa Laboratorial",
        description: "Escultura das facetas com riqueza de detalhes anatômicos.",
        clinicalDetails: "Camadas cerâmicas com translucidez natural idêntica ao esmalte.",
      },
      {
        stepNumber: 4,
        title: "Cimentação Adesiva & Acabamento",
        duration: "90 minutos",
        description: "Fixação definitiva com cimentos resinosos de última geração.",
        clinicalDetails: "Polimento minucioso e ajuste funcional para longevidade.",
      },
    ],
    recoveryTimeline: [
      { period: "Primeiras 24 Horas", expectedSensations: "Adaptação rápida à nova anatomia e textura.", careProtocol: "Alimentos normais, higiene diária e cuidados habituais." },
      { period: "Longo Prazo", expectedSensations: "Sensação e função completamente naturais.", careProtocol: "Consultas semestrais para polimento e controle." },
    ],
    costTransparency: {
      baseRange: "Orçamentos claros e facilitados em Manaus",
      factors: ["Número de dentes envolvidos e tipo de material (resina composta estratificada ou cerâmica pura)."],
      whatIsIncluded: [
        "Planejamento estético individualizado",
        "Procedimentos clínicos com a equipe odontológica",
        "Materiais certificados de alta estética",
      ],
      note: "Excelente investimento na sua autoconfiança e imagem pessoal.",
    },
    beforeAfterCase: {
      category: "Estética do Sorriso",
      clinicalContext: "Transformação estética do sorriso realizada com restaurações cerâmicas pela equipe odontológica.",
      beforeLabel: "Pré-tratamento: Desgastes e Assimetria",
      afterLabel: "Pós-tratamento: Sorriso Renovado e Harmônico",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      timeframe: "Sessões Clínicas",
    },
    assignedDentistId: "dental-studio-doctor",
    faqs: [
      { question: "Facetas e lentes de contato duram quanto tempo?", answer: "Quando bem cuidadas com higiene e visitas regulares, facetas de cerâmica podem durar mais de 10 a 15 anos." },
      { question: "O sorriso vai parecer artificial?", answer: "Não! Trabalhamos com gradação de cores e translucidez personalizada para que o resultado pareça 100% natural." },
    ],
  },
];

export interface EmergencyCondition {
  id: string;
  title: string;
  urgency: "Immediate (0–2 hours)" | "Same-Day (2–6 hours)" | "Urgent (Within 24 hours)";
  symptoms: string[];
  immediateAction: string[];
  clinicTreatment: string;
}

export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  {
    id: "severe-toothache",
    title: "Dor de Dente Intensa / Pulpite Aguda",
    urgency: "Same-Day (2–6 hours)",
    symptoms: [
      "Dor pulsátil ou contínua que impede o sono",
      "Dor aguda que irradia para ouvido, mandíbula ou têmpora",
      "Sensibilidade extrema ao calor e ao frio",
    ],
    immediateAction: [
      "Entre em contato pelo nosso WhatsApp ou telefone +55 92 98479-8868.",
      "Faça bochechos suaves com água morna.",
      "Aplique compressa fria no lado externo da bochecha (nunca coloque calor).",
    ],
    clinicTreatment: "Anestesia local imediata, remoção do foco inflamatório e alívio rápido do sofrimento.",
  },
  {
    id: "knocked-out-tooth",
    title: "Dente Quebrado ou Avulsionado (Trauma)",
    urgency: "Immediate (0–2 hours)",
    symptoms: [
      "Dente quebrado ou completamente saído da gengiva após queda/impacto",
      "Sangramento local no alvéolo dentário",
    ],
    immediateAction: [
      "Segure o dente apenas pela coroa, nunca pela raiz.",
      "Guarde o dente em leite ou saliva e venha imediatamente ao consultório.",
      "Ligue para o nosso número de emergência: +55 92 98479-8868.",
    ],
    clinicTreatment: "Reimplante imediato com contenção flexível ou reconstrução estética de urgência.",
  },
  {
    id: "broken-fractured-tooth",
    title: "Prótese ou Restauração Quebrada",
    urgency: "Same-Day (2–6 hours)",
    symptoms: [
      "Borda cortante que machuca língua ou bochecha",
      "Desconforto ao mastigar ou falar",
    ],
    immediateAction: [
      "Evite mastigar no lado afetado.",
      "Proteja a borda com cera ortodôntica se disponível.",
      "Contate nosso consultório para encaixe rápido no mesmo dia.",
    ],
    clinicTreatment: "Reparo emergencial ou substituição estética com conforto imediato.",
  },
  {
    id: "dental-abscess",
    title: "Abscesso Dentário & Inchaço Facial",
    urgency: "Immediate (0–2 hours)",
    symptoms: [
      "Inchaço evidente na bochecha, gengiva ou mandíbula",
      "Febre ou gosto ruim na boca",
    ],
    immediateAction: [
      "Ligue imediatamente para nosso plantão de atendimento (+55 92 98479-8868).",
      "Use compressa fria externamente; NÃO aplique calor.",
      "Mantenha a cabeça elevada ao deitar.",
    ],
    clinicTreatment: "Drenagem do abscesso, descompressão do dente e terapia antibiótica indicada.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  authorId: string;
  excerpt: string;
  leadImage: string;
  relatedServiceSlug: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    faqs?: { question: string; answer: string }[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "understanding-osseointegration-dental-implants",
    title: "Implantes de Carga Imediata: Como Recuperar Seu Sorriso em 1 Dia",
    category: "Dental Implants",
    readTime: "5 min de leitura",
    publishDate: "2026-08-11",
    lastUpdated: "2026-09-20",
    authorId: "dental-studio-doctor",
    excerpt: "Entenda como a técnica de carga imediata desenvolvida na odontologia moderna permite restabelecer dentes fixos e o sorriso com agilidade e segurança.",
    leadImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "dental-implants",
    content: {
      intro: "A tecnologia de implantes dentários com carga imediata representa uma grande evolução para quem deseja rapidez e conforto na reposição de dentes. Sob os protocolos a equipe odontológica em Manaus, é possível recuperar seu sorriso em 1 dia.",
      sections: [
        {
          heading: "O que é Carga Imediata?",
          body: "A carga imediata consiste na colocação do implante de titânio e na instalação da prótese dentária provisória ou definitiva no mesmo dia ou em poucas horas após a cirurgia, permitindo ao paciente sorrir com firmeza imediata.",
        },
        {
          heading: "Vantagens da Técnica para o Paciente",
          body: "Além da rapidez no resultado estético, a carga imediata preserva a gengiva, impede a perda óssea e dispensa o uso prolongado de dentaduras móveis desconfortáveis.",
        },
      ],
      faqs: [
        { question: "Qualquer pessoa pode fazer carga imediata?", answer: "É necessária uma avaliação tomográfica para verificar a qualidade e o volume ósseo. Com boa estabilidade primária, a carga imediata é altamente recomendada." },
      ],
    },
  },
  {
    slug: "microscopic-endodontics-vs-tooth-extraction",
    title: "Tratamento de Canal Moderno: Preservando Seu Dente Natural Sem Dor",
    category: "Root Canal",
    readTime: "5 min de leitura",
    publishDate: "2026-07-15",
    lastUpdated: "2026-09-10",
    authorId: "dental-studio-doctor",
    excerpt: "Por que manter sua raiz natural é sempre a melhor escolha e como as técnicas atuais tornam o tratamento de canal rápido e indolor.",
    leadImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "root-canal",
    content: {
      intro: "Preservar a estrutura dental natural mantém a sensibilidade mastigatória e o equilíbrio da arcada. A equipe odontológica destaca os avanços que tornam o tratamento de canal seguro e tranquilo.",
      sections: [
        {
          heading: "A Precisão dos Instrumentos Rotatórios",
          body: "Com instrumentos flexíveis e localizadores apicais modernos, a desinfecção dos canais ocorre de forma rápida e precisa até a ponta da raiz.",
        },
        {
          heading: "Selamento Biocompatível",
          body: "O preenchimento com materiais biocompatíveis cria uma barreira protetora que impede o retorno de bactérias e garante a longevidade do dente.",
        },
      ],
      faqs: [
        { question: "Um dente com canal tratado dura a vida toda?", answer: "Sim, com uma restauração adequada e higienização correta, o dente tratado pode durar por décadas." },
      ],
    },
  },
  {
    slug: "clear-aligner-biomechanics-for-adults",
    title: "Aparelhos Ortodônticos em Manaus: Alinhamento para Todas as Idades",
    category: "Braces & Orthodontics",
    readTime: "6 min de leitura",
    publishDate: "2026-06-20",
    lastUpdated: "2026-09-05",
    authorId: "dental-studio-doctor",
    excerpt: "Como os aparelhos metálicos, estéticos e alinhadores invisíveis corrigem apinhamento e mordida com conforto em adultos e jovens.",
    leadImage: "https://images.unsplash.com/photo-1594824813583-e18e3848b814?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "braces",
    content: {
      intro: "A ortodontia moderna possibilita tratamentos discretos e eficientes para pacientes de todas as idades, restabelecendo a estética do sorriso e a saúde mastigatória.",
      sections: [
        {
          heading: "Planejamento Personalizado",
          body: "Cada arcada recebe um planejamento exclusivo para aplicar forças leves e fisiológicas, garantindo movimentação precisa sem desconforto excessivo.",
        },
      ],
    },
  },
  {
    slug: "minimally-invasive-veneers-enamel-preservation",
    title: "Odontologia Domiciliar: Cuidado Especializado no Conforto da Sua Casa",
    category: "Cosmetic Dentistry",
    readTime: "5 min de leitura",
    publishDate: "2026-05-10",
    lastUpdated: "2026-09-01",
    authorId: "dental-studio-doctor",
    excerpt: "Como funciona o atendimento de odontologia domiciliar para idosos e pacientes com dificuldade de locomoção em Manaus.",
    leadImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "cosmetic-dentistry",
    content: {
      intro: "A equipe odontológica realiza atendimentos de odontologia domiciliar em Manaus, levando consultório portátil e cuidado humanizado até a residência dos pacientes.",
      sections: [
        {
          heading: "Quem Pode se Beneficiar?",
          body: "Pacientes idosos, acamados, pós-cirúrgicos ou com limitações de locomoção recebem profilaxia, restaurações, próteses e alívio da dor no conforto do lar.",
        },
      ],
    },
  },
];

export const PATIENT_REVIEWS = [
  {
    id: "review-silvio-gomes",
    author: "Silvio Gomes",
    treatment: "Avaliação no Google · há 1 ano",
    quote: "Recomenda a clínica e destaca os profissionais altamente qualificados e o excelente atendimento, especialmente o da Dra. Fernanda.",
    year: "★★★★★",
  },
  {
    id: "review-maria-celia-moura",
    author: "Maria Celia Moura Celia",
    treatment: "Avaliação no Google · há 4 anos",
    quote: "Elogia o atendimento alegre e positivo da Dra. Fernanda e conta que adorou o cuidado odontológico.",
    year: "★★★★★",
  },
];
