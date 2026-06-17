import { Component } from '@angular/core';

interface SystemLayer {
  index: string;
  label: string;
  title: string;
  stack: string[];
}

interface Connector {
  protocol: string;
  color: 'accent' | 'accent-2';
}

@Component({
  selector: 'app-architecture',
  imports: [],
  templateUrl: './architecture.html',
  styleUrl: './architecture.scss',
})
export class Architecture {
  protected readonly layers: SystemLayer[] = [
    {
      index: '01',
      label: 'cliente',
      title: 'Experiencia',
      stack: ['Angular', 'React', 'RxJS', 'Signals'],
    },
    {
      index: '02',
      label: 'servicio',
      title: 'Lógica de negocio',
      stack: ['.NET 8', 'Clean Architecture', 'CQRS', 'Microservicios'],
    },
    {
      index: '03',
      label: 'persistencia',
      title: 'Datos',
      stack: ['SQL Server', 'PostgreSQL', 'EF Core', 'Dapper'],
    },
  ];

  protected readonly connectors: Connector[] = [
    { protocol: 'HTTP/JSON', color: 'accent' },
    { protocol: 'SQL/TDS', color: 'accent-2' },
  ];
}
