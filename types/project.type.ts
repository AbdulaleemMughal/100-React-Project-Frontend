export type ProjectType = {
    _id: string;
    name: string;
    description: string;
    popularity: string;
    languages: string[];
    image: string;
    liveDemo: string;
    sourceCode: string;
    createdAt?: string;
    updatedAt?: string;
}