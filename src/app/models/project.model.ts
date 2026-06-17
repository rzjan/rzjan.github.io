export type ProjectStatus = 'live' | 'in-progress' | 'building';

export interface ProjectItem {
  name: string;
  description: string;
  tag: string;
  status: ProjectStatus;
  statusLabel: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
}
