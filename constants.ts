import { Project, SkillMetric } from './types';

export const PERSONAL_INFO = {
  name: "Ayush Ipar",
  title: "AI & Cloud Computing Student",
  email: "iparayush@gmail.com",
  github: "https://github.com/iparayush",
  linkedin: "https://www.linkedin.com/in/ayush-ipar/",
  instagram: "https://www.instagram.com/iparayush/?__pwa=1",
  location: "Mumbai, India",
  bio: "Student at MET Institute Of Management. I am studying Artificial Intelligence, Data Analysis, and Cloud Computing. Skilled in Python, SQL, Machine Learning, and AWS/Azure, with a passion for building smart, data-driven, and scalable solutions.",
  heroImage: "ph.png"
};

export const SKILLS: SkillMetric[] = [
  { name: 'React/Next.js', level: 95, category: 'Frontend' },
  { name: 'JavaScript', level: 95, category: 'Frontend' },
  { name: 'HTML', level: 95, category: 'Frontend' },
  { name: 'CSS', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Python', level: 85, category: 'Backend' },
  { name: 'C++', level: 80, category: 'Backend' },
  { name: 'C', level: 75, category: 'Backend' },
  { name: 'R', level: 70, category: 'Backend' },
  { name: 'MATLAB', level: 75, category: 'Tools' },
  { name: 'AWS', level: 85, category: 'Backend' },
  { name: 'SQL', level: 90, category: 'Backend' },
  { name: 'Azure', level: 75, category: 'Backend' },
  { name: 'Machine Learning', level: 80, category: 'Tools' },
  { name: 'Artificial Intelligence', level: 80, category: 'Tools' },
  { name: 'Cloud Computing', level: 85, category: 'Tools' },
  { name: 'Data Analysis', level: 85, category: 'Tools' },
  { name: 'Database Design', level: 80, category: 'Backend' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'VibeCheck AI',
    description: 'An AI-powered sentiment analysis application that interprets emotional tone from user inputs, designed to enhance digital communication clarity.',
    tech: ['Python', 'NLP', 'React', 'FastAPI'],
    github: 'https://github.com/iparayush/VibeCheck-AI',
    link: 'https://github.com/iparayush/VibeCheck-AI'
  },
  {
    id: '2',
    title: 'Career Skills Advisor',
    description: 'A personalized recommendation engine that analyzes user profiles to suggest tailored career paths and necessary skill acquisitions.',
    tech: ['Machine Learning', 'React', 'Node.js', 'Express'],
    github: 'https://github.com/iparayush/Personalized-Career-Skills-Advisor',
    link: 'https://github.com/iparayush/Personalized-Career-Skills-Advisor'
  },
  {
    id: '3',
    title: 'Agri AI',
    description: 'Smart agricultural solution utilizing computer vision to detect plant diseases and providing actionable insights for crop management.',
    tech: ['TensorFlow', 'Python', 'React Native', 'IoT'],
    github: 'https://github.com/iparayush/agri-ai',
    link: 'https://github.com/iparayush/agri-ai'
  },
  {
    id: '4',
    title: 'Healthlok',
    description: 'A comprehensive healthcare platform designed to bridge the gap between patients and medical services with appointment scheduling and records.',
    tech: ['MERN Stack', 'Redux', 'Socket.io', 'Tailwind'],
    github: 'https://github.com/iparayush/Helathlok_full_project',
    link: 'https://github.com/iparayush/Helathlok_full_project'
  },
  {
    id: '5',
    title: 'Skill Swap Platform',
    description: 'A collaborative community platform enabling users to exchange skills and knowledge via peer-to-peer sessions.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    github: 'https://github.com/iparayush/Skill_Swap_Platform1',
    link: 'https://github.com/iparayush/Skill_Swap_Platform1'
  },
  {
    id: '6',
    title: 'Ipar AI',
    description: 'An experimental playground for generative AI models and custom LLM implementations.',
    tech: ['PyTorch', 'Hugging Face', 'Python', 'Streamlit'],
    github: 'https://github.com/iparayush/ipar-ai-',
    link: 'https://github.com/iparayush/ipar-ai-'
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant living in the portfolio website of ${PERSONAL_INFO.name}.
Your goal is to answer questions about Ayush's professional experience, skills, and projects in a professional yet friendly tone.

Here is Ayush's resume data:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Bio: ${PERSONAL_INFO.bio}
Location: ${PERSONAL_INFO.location}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.level}%)`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Stack: ${p.tech.join(', ')})`).join('\n')}

Instructions:
1. Keep answers concise (under 3 sentences unless asked for detail).
2. Highlight specific projects when relevant.
3. If asked about contact info, provide ${PERSONAL_INFO.email}.
4. Be enthusiastic about technology.
`;
