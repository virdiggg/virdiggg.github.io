export interface FeatureItem {
    title: string;
    description: string;
}

export interface Project {
    id: string;
    title: string;
    summary: string;
    description: string[];
    techStack: string[];
    keyFeatures: FeatureItem[];
    systemArchitecture?: string;
    workflow?: {
        business: string;
        system: string;
    };
    note?: string;
    screenshots: string[];
}

export interface OpenSource {
    id: string;
    title: string;
    summary: string;
    githubLink: string;
}
