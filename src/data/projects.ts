/**
 * PROJECT DATA - Videos hosted on Google Drive
 */

export type ProjectCategory = 'commercial' | 'music-video' | 'documentary' | 'film' | 'motion';

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    videoUrl: string;
    driveId: string;
    featured?: boolean;
    year: number;
    client?: string;
    duration?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
    'commercial': 'Commercial',
    'music-video': 'Music Video',
    'documentary': 'Documentary',
    'film': 'Short Film',
    'motion': 'Motion Graphics',
};

export const projects: Project[] = [
    {
        id: 'midnight-drive',
        title: 'Midnight Drive',
        category: 'commercial',
        description: 'Cinematic automotive commercial featuring moody night photography.',
        videoUrl: 'https://drive.google.com/file/d/1jYJfd39O9PrBLpMu1LGn7k3eBqMNWDbs/preview',
        driveId: '1jYJfd39O9PrBLpMu1LGn7k3eBqMNWDbs',
        featured: true,
        year: 2024,
        client: 'Automotive Brand',
        duration: '1:30',
    },
    {
        id: 'neon-dreams',
        title: 'Neon Dreams',
        category: 'music-video',
        description: 'High-energy music video with vibrant neon aesthetics.',
        videoUrl: 'https://drive.google.com/file/d/1hmv9k2lyG8G_RJUYl2mf-_cMmEKSI3hN/preview',
        driveId: '1hmv9k2lyG8G_RJUYl2mf-_cMmEKSI3hN',
        featured: false,
        year: 2024,
        client: 'Independent Artist',
        duration: '3:45',
    },
    {
        id: 'urban-stories',
        title: 'Urban Stories',
        category: 'documentary',
        description: 'Documentary exploring city life through intimate portraits.',
        videoUrl: 'https://drive.google.com/file/d/1asKoI2utuUbVGrijkgdKq87gpvnF-g1e/preview',
        driveId: '1asKoI2utuUbVGrijkgdKq87gpvnF-g1e',
        featured: false,
        year: 2023,
        duration: '12:00',
    },
    {
        id: 'the-last-frame',
        title: 'The Last Frame',
        category: 'film',
        description: 'Award-winning short film about a photographer.',
        videoUrl: 'https://drive.google.com/file/d/10V4lLOCY3pgHLofJLt2Fq1C9IOPUVzWb/preview',
        driveId: '10V4lLOCY3pgHLofJLt2Fq1C9IOPUVzWb',
        featured: false,
        year: 2023,
        duration: '18:00',
    },
    {
        id: 'brand-evolution',
        title: 'Brand Evolution',
        category: 'motion',
        description: 'Dynamic motion graphics for tech startup rebrand.',
        videoUrl: 'https://drive.google.com/file/d/1_XvTkmGQ4me1qYiKRCBdPPpiXtJNZ8Og/preview',
        driveId: '1_XvTkmGQ4me1qYiKRCBdPPpiXtJNZ8Og',
        featured: false,
        year: 2024,
        client: 'Tech Startup',
        duration: '0:45',
    },
];

export const getFeaturedProject = (): Project | undefined => projects.find(p => p.featured);
export const getProjectsByCategory = (category: ProjectCategory): Project[] => projects.filter(p => p.category === category);
export const getProjectById = (id: string): Project | undefined => projects.find(p => p.id === id);
