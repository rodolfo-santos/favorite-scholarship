import { IScholarship } from './../models/IScholarshop';
const db: IScholarship[] = [
  {
    fullPrice: 2139.64,
    priceWithDiscount: 706.08,
    discountPercentage: 67.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'engenhariamecanica',
      name: 'Engenharia Mecânica',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'UNIP',
      score: 4.5,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unip.png',
    },
    campus: {
      name: 'Jardim das Indústrias',
      city: 'São José dos Campos',
    },
  },
  {
    fullPrice: 1227.05,
    priceWithDiscount: 515.36,
    discountPercentage: 58.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'jornalismo',
      name: 'Jornalismo',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'UNIP',
      score: 4.5,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unip.png',
    },
    campus: {
      name: 'Água Branca',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 1487.31,
    priceWithDiscount: 520.56,
    discountPercentage: 65.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'biomedicina',
      name: 'Biomedicina',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'UNIP',
      score: 4.5,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unip.png',
    },
    campus: {
      name: 'Jaguaré',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 1668.4,
    priceWithDiscount: 617.31,
    discountPercentage: 63.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'arquiteturaeurbanismo',
      name: 'Arquitetura e Urbanismo',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Manhã',
    },
    university: {
      name: 'UNIP',
      score: 4.5,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unip.png',
    },
    campus: {
      name: 'Parque São Jorge',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 1447.29,
    priceWithDiscount: 477.61,
    discountPercentage: 67.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'propagandaemarketing',
      name: 'Propaganda e Marketing',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'UNIP',
      score: 4.5,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unip.png',
    },
    campus: {
      name: 'Paraíso',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 1461.16,
    priceWithDiscount: 1241.99,
    discountPercentage: 15.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'jornalismo',
      name: 'Jornalismo',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'Anhembi Morumbi',
      score: 4.2,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png',
    },
    campus: {
      name: 'Vila Olímpia',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 1520.0,
    priceWithDiscount: 1368.0,
    discountPercentage: 10.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'marketing',
      name: 'Marketing',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'Anhembi Morumbi',
      score: 4.2,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png',
    },
    campus: {
      name: 'Bela Vista',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 1498.0,
    priceWithDiscount: 1273.3,
    discountPercentage: 15.0,
    startDate: '01/02/2020',
    enrollmentSemester: '2020.1',
    enabled: false,
    course: {
      id: 'biomedicina',
      name: 'Biomedicina',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Manhã',
    },
    university: {
      name: 'Anhembi Morumbi',
      score: 4.2,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png',
    },
    campus: {
      name: 'Vila Olímpia',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 1745.22,
    priceWithDiscount: 539.1,
    discountPercentage: 69.11,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'engenhariamecanica',
      name: 'Engenharia Mecânica',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Manhã',
    },
    university: {
      name: 'UNICSUL',
      score: 3.9,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unicsul.png',
    },
    campus: {
      name: 'Paulista',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 1367.34,
    priceWithDiscount: 539.14,
    discountPercentage: 60.57,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'cienciadacomputacao',
      name: 'Ciência da Computação',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'UNICSUL',
      score: 3.9,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unicsul.png',
    },
    campus: {
      name: 'Paulista',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 2038.19,
    priceWithDiscount: 1259.02,
    discountPercentage: 38.24,
    startDate: '01/02/2020',
    enrollmentSemester: '2020.1',
    enabled: false,
    course: {
      id: 'gastronomia',
      name: 'Gastronomia',
      kind: 'Presencial',
      level: 'Tecnólogo',
      shift: 'Noite',
    },
    university: {
      name: 'UNICSUL',
      score: 3.9,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unicsul.png',
    },
    campus: {
      name: 'Anália Franco',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 437.0,
    priceWithDiscount: 142.9,
    discountPercentage: 67.3,
    startDate: '01/02/2020',
    enrollmentSemester: '2020.1',
    enabled: true,
    course: {
      id: 'jogosdigitais',
      name: 'Jogos Digitais',
      kind: 'EaD',
      level: 'Tecnólogo',
      shift: 'Virtual',
    },
    university: {
      name: 'UNICSUL',
      score: 3.9,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unicsul.png',
    },
    campus: {
      name: 'Liberdade',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 453.0,
    priceWithDiscount: 186.82,
    discountPercentage: 58.76,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'cienciadacomputacao',
      name: 'Ciência da Computação',
      kind: 'EaD',
      level: 'Bacharelado',
      shift: 'Virtual',
    },
    university: {
      name: 'UNICSUL',
      score: 3.9,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unicsul.png',
    },
    campus: {
      name: 'São Miguel Paulista',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 453.0,
    priceWithDiscount: 163.03,
    discountPercentage: 64.01,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'sistemasdeinformacao',
      name: 'Sistemas de Informação',
      kind: 'EaD',
      level: 'Bacharelado',
      shift: 'Virtual',
    },
    university: {
      name: 'UNICSUL',
      score: 3.9,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unicsul.png',
    },
    campus: {
      name: 'Liberdade',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 499.0,
    priceWithDiscount: 159.23,
    discountPercentage: 68.09,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'cienciaseconomicas',
      name: 'Ciências Econômicas',
      kind: 'EaD',
      level: 'Bacharelado',
      shift: 'Virtual',
    },
    university: {
      name: 'UNICSUL',
      score: 3.9,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unicsul.png',
    },
    campus: {
      name: 'Paulista',
      city: 'São Paulo',
    },
  },
  {
    fullPrice: 998.33,
    priceWithDiscount: 748.75,
    discountPercentage: 25.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'gestaoderecursoshumanos',
      name: 'Gestão de Recursos Humanos',
      kind: 'Presencial',
      level: 'Tecnólogo',
      shift: 'Noite',
    },
    university: {
      name: 'Anhanguera',
      score: 3.5,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/anhanguera.png',
    },
    campus: {
      name: 'Rio Comprido',
      city: 'São José dos Campos',
    },
  },
  {
    fullPrice: 1408.63,
    priceWithDiscount: 493.02,
    discountPercentage: 65.0,
    startDate: '01/02/2020',
    enrollmentSemester: '2020.1',
    enabled: true,
    course: {
      id: 'arquiteturaeurbanismo',
      name: 'Arquitetura e Urbanismo',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'Anhanguera',
      score: 3.5,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/anhanguera.png',
    },
    campus: {
      name: 'Rio Comprido',
      city: 'São José dos Campos',
    },
  },
  {
    fullPrice: 1385.57,
    priceWithDiscount: 692.79,
    discountPercentage: 50.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'farmacia',
      name: 'Farmácia',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Manhã',
    },
    university: {
      name: 'Estácio',
      score: 4.1,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/estacio.png',
    },
    campus: {
      name: 'Patriolino Ribeiro',
      city: 'Fortaleza',
    },
  },
  {
    fullPrice: 414.14,
    priceWithDiscount: 207.07,
    discountPercentage: 50.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'sistemasdeinformacao',
      name: 'Sistemas de Informação',
      kind: 'EaD',
      level: 'Bacharelado',
      shift: 'Virtual',
    },
    university: {
      name: 'Estácio',
      score: 4.1,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/estacio.png',
    },
    campus: {
      name: 'Centro',
      city: 'Jacareí',
    },
  },
  {
    fullPrice: 414.14,
    priceWithDiscount: 207.07,
    discountPercentage: 50.0,
    startDate: '01/02/2020',
    enrollmentSemester: '2020.1',
    enabled: true,
    course: {
      id: 'gestaoderecursoshumanos',
      name: 'Gestão de Recursos Humanos',
      kind: 'EaD',
      level: 'Tecnólogo',
      shift: 'Virtual',
    },
    university: {
      name: 'Estácio',
      score: 4.1,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/estacio.png',
    },
    campus: {
      name: 'Centro',
      city: 'São José dos Campos',
    },
  },
  {
    fullPrice: 428.43,
    priceWithDiscount: 278.48,
    discountPercentage: 35.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'administracao',
      name: 'Administração',
      kind: 'EaD',
      level: 'Bacharelado',
      shift: 'Virtual',
    },
    university: {
      name: 'Estácio',
      score: 4.1,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/estacio.png',
    },
    campus: {
      name: 'Centro',
      city: 'São José dos Campos',
    },
  },
  {
    fullPrice: 519.71,
    priceWithDiscount: 222.23,
    discountPercentage: 57.24,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'historia',
      name: 'História',
      kind: 'EaD',
      level: 'Licenciatura',
      shift: 'Virtual',
    },
    university: {
      name: 'Unopar',
      score: 4.0,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unopar.png',
    },
    campus: {
      name: 'São José dos Campos',
      city: 'São José dos Campos',
    },
  },
  {
    fullPrice: 454.56,
    priceWithDiscount: 174.01,
    discountPercentage: 61.72,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'gestaoderecursoshumanos',
      name: 'Gestão de Recursos Humanos',
      kind: 'EaD',
      level: 'Tecnólogo',
      shift: 'Virtual',
    },
    university: {
      name: 'Unopar',
      score: 4.0,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/unopar.png',
    },
    campus: {
      name: 'Motorama',
      city: 'São José dos Campos',
    },
  },
  {
    fullPrice: 1219.86,
    priceWithDiscount: 609.93,
    discountPercentage: 50.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'administracao',
      name: 'Administração',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'ETEP',
      score: 3.2,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/etep.png',
    },
    campus: {
      name: 'Jardim Esplanada',
      city: 'São José dos Campos',
    },
  },
  {
    fullPrice: 932.58,
    priceWithDiscount: 606.18,
    discountPercentage: 35.0,
    startDate: '01/08/2019',
    enrollmentSemester: '2019.2',
    enabled: true,
    course: {
      id: 'Educação Física',
      name: 'Educação Física',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite',
    },
    university: {
      name: 'ETEP',
      score: 3.2,
      logoUrl: 'https://www.tryimg.com/u/2019/04/16/etep.png',
    },
    campus: {
      name: 'Jardim Esplanada',
      city: 'São José dos Campos',
    },
  },
];

export default db;