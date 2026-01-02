/**
 * PROJECT DATA - Single source of truth for all video projects
 * 
 * Videos hosted on Google Drive
 */

export type ProjectCategory =
    | 'commercial'
    | 'music-video'
    | 'documentary'
    | 'film'
    | 'motion';

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    videoUrl: string;
    fallbackUrl?: string;
    thumbnail?: string;
    featured?: boolean;
    year: number;
    client?: string;
    duration?: string;
}

// Category display names for UI
export const categoryLabels: Record<ProjectCategory, string> = {
    'commercial': 'Commercial',
    'music-video': 'Music Video',
    'documentary': 'Documentary',
    'film': 'Short Film',
    'motion': 'Motion Graphics',
};

/**
 * Main projects array - Videos hosted on Google Drive
 */
export const projects: Project[] = [
    {
        id: 'midnight-drive',
        title: 'Midnight Drive',
        category: 'commercial',
        description: 'Cinematic automotive commercial featuring moody night photography and dynamic color grading.',
        videoUrl: 'https://drive.google.com/uc?export=download&id=1jYJfd39O9PrBLpMu1LGn7k3eBqMNWDbs',
        featured: true,
        year: 2024,
        client: 'Automotive Brand',
        duration: '1:30',
    },
    {
        id: 'neon-dreams',
        title: 'Neon Dreams',
        category: 'music-video',
        description: 'High-energy music video with vibrant neon aesthetics and seamless visual effects.',
        videoUrl: 'https://drive.google.com/uc?export=download&id=1hmv9k2lyG8G_RJUYl2mf-_cMmEKSI3hN',
        featured: false,
        year: 2024,
        client: 'Independent Artist',
        duration: '3:45',
    },
    {
        id: 'urban-stories',
        title: 'Urban Stories',
        category: 'documentary',
        description: 'Documentary exploring city life through intimate portraits and atmospheric storytelling.',
        videoUrl: 'https://drive.google.com/uc?export=download&id=1asKoI2utuUbVGrijkgdKq87gpvnF-g1e',
        featured: false,
        year: 2023,
        duration: '12:00',
    },
    {
        id: 'the-last-frame',
        title: 'The Last Frame',
        category: 'film',
        description: 'Award-winning short film about a photographer\'s final assignment. Sundance Selection 2023.',
        videoUrl: 'https://drive.google.com/uc?export=download&id=10V4lLOCY3pgHLofJLt2Fq1C9IOPUVzWb',
        featured: false,
        year: 2023,
        duration: '18:00',
    },
    {
        id: 'brand-evolution',
        title: 'Brand Evolution',
        category: 'motion',
        description: 'Dynamic motion graphics package for tech startup rebrand, featuring 3D elements and kinetic typography.',
        videoUrl: 'https://drive.google.com/uc?export=download&id=1_XvTkmGQ4me1qYiKRCBdPPpiXtJNZ8Og',
        featured: false,
        year: 2024,
        client: 'Tech Startup',
        duration: '0:45',
    },
];

// Helper: Get featured project for showreel
export const getFeaturedProject = (): Project | undefined => {
    return projects.find(p => p.featured);
};

// Helper: Get projects by category
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
    return projects.filter(p => p.category === category);
};

// Helper: Get project by ID
export const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
};
