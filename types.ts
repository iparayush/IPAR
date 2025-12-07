export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface SkillMetric {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}