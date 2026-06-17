import { ProjectItem } from '../models/project.model';

export const PROJECTS: ProjectItem[] = [
  {
    name: 'SpecDrivenApi',
    description:
      'Plataforma Spec-Driven para análisis de contratos OpenAPI. Carga manual de especificaciones, revisión visual con ReDoc y generación de código para backend .NET y clientes Angular/React a partir del contrato validado.',
    tag: 'Backend · Spec-Driven',
    status: 'live',
    statusLabel: 'Disponible',
    stack: ['.NET 10', 'Minimal API', 'OpenAPI', 'ReDoc'],
    repoUrl: 'https://github.com/rzjan/SpecDrivenApi',
  },
  {
    name: 'SegurAppSuite',
    description:
      'Suite de gestión para el dominio de seguros: pólizas, formularios y validaciones de negocio. Inspirada en procesos reales de productos financieros que trabajé en banca (formularios de seguros personales, validaciones avanzadas).',
    tag: 'Fullstack · Dominio seguros',
    status: 'in-progress',
    statusLabel: 'En desarrollo activo',
    stack: ['.NET 8', 'Angular', 'SQL Server'],
    repoUrl: 'https://github.com/rzjan/SegurAppSuite',
  },
  {
    name: 'TickeventFlow',
    description:
      'Plataforma de gestión de tickets/eventos diseñada con Arquitectura Dirigida por Eventos (EDA). Foco en desacoplamiento entre servicios, colas de mensajería y consistencia eventual en flujos de alta concurrencia.',
    tag: 'Arquitectura · Event-Driven',
    status: 'building',
    statusLabel: 'En construcción',
    stack: ['.NET 8', 'RabbitMQ', 'Microservicios', 'CQRS'],
    repoUrl: 'https://github.com/rzjan',
  },
];
