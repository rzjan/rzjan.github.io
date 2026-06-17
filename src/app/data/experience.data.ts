import { ExperienceItem } from '../models/experience.model';

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Banco Galicia S.A. (vía One Demand)',
    role: 'Dev Fullstack .NET Core — Microservicios, Backend & React',
    period: '06/2023 — 12/2025',
    industry: 'Banca',
    highlights: [
      'Lideré el diseño y ejecución técnica del proceso de ETL y migración de datos desde sistemas legacy (Mainframe/Cobol) hacia el nuevo modelo relacional y documental del sistema de Cajas de Seguridad.',
      'Diseñé e implementé arquitecturas de microservicios bajo Clean Architecture y DDD, con despliegues en OpenShift y Jenkins (CI/CD).',
      'Aplicué metodología Spec para la definición estricta de contratos, esquemas y servicios del ecosistema backend.',
      'Integré de extremo a extremo el sistema con ServiceNow para automatización de pedidos internos y flujos de tickets enterprise.',
      'Coordiné la migración masiva de datos estructurados desde la plataforma de Ex-HSBC hacia los sistemas unificados de Banco Galicia.',
    ],
    stack: ['.NET Core', 'React', 'Microservicios', 'OpenShift', 'Jenkins', 'ServiceNow'],
  },
  {
    company: 'Banco Hipotecario S.A.',
    role: 'Dev Fullstack .NET Core / Angular',
    period: '04/2022 — 06/2023',
    industry: 'Banca',
    highlights: [
      'Ejecuté la migración completa de sistemas internos basados en Visual Basic 6.0 hacia microservicios modernos en .NET Core 6.',
      'Desarrollé la app "Gestión de Perfiles" con Minimal APIs, Entity Framework Core y SQL Server, conectada a un frontend en Angular 14, Tailwind CSS y DaisyUI.',
      'Diseñé el módulo "Formularios de Seguros Personales" con Angular 14, integrando validaciones avanzadas de seguridad con Recaptcha v3.',
      'Optimicé consultas y stored procedures complejos sobre bases SQL Server de alta concurrencia.',
    ],
    stack: ['.NET Core 6', 'Angular 14', 'EF Core', 'SQL Server', 'Tailwind CSS'],
  },
  {
    company: 'Innovación Digital Misiones',
    role: 'Dev Fullstack .NET Core / React JS',
    period: '08/2020 — 04/2022',
    industry: 'Gobierno',
    highlights: [
      'Desarrollé end-to-end la plataforma de Gestión de Trámites Municipales para la Municipalidad de Posadas (habilitaciones comerciales, proveedores, expedientes).',
      'Diseñé la arquitectura de APIs REST con .NET Core 5 y PostgreSQL, desacoplando la seguridad en un microservicio dedicado (AuthApi/gateway).',
      'Construí interfaces dinámicas en React JS con Bootstrap 4, integrando validaciones federadas con AFIP.',
    ],
    stack: ['.NET Core 5', 'React JS', 'PostgreSQL', 'Bootstrap 4'],
  },
  {
    company: 'Metrodev',
    role: 'Dev Fullstack .NET Core / Angular',
    period: '12/2019 — 07/2020',
    industry: 'Seguros / Construcción',
    highlights: [
      'Desarrollé evolutivos sobre el sistema de seguros "App Communitys" con .NET Core, EF Core, SQL Server, ABP Framework y Angular 9 con Angular Material.',
      'Implementé maquetado dinámico y lógica frontend en la plataforma de gestión de obras "App Pronixe" con JavaScript y jQuery conectados a servicios .NET.',
    ],
    stack: ['.NET Core', 'Angular 9', 'ABP Framework', 'EF Core'],
  },
  {
    company: 'Gestec S.A.',
    role: 'Analista Desarrollador .NET / Angular',
    period: '03/2013 — 12/2019',
    industry: 'Gobierno',
    highlights: [
      'Desarrollé Web APIs robustas en .NET Core consumiendo bases empresariales mediante PL/SQL, Dapper ORM y Entity Framework para el sistema "SGLC" (gestión de multas) con Angular 7.',
      'Lideré la actualización de sistemas legacy desde .NET Framework hacia .NET Core.',
    ],
    stack: ['.NET Framework', '.NET Core', 'Angular 7', 'Dapper', 'PL/SQL', 'Oracle'],
  },
];
