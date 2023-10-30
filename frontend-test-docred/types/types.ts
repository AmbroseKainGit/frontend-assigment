export enum Chapters {
    NEXT_JS_FUNDAMENTALS = 'Next.js Fundamentals',
    CREATING_FIRST_PROJECT = 'Creating Your First Nextjs Project',
    DATA_FETCHING = 'Data Fetching',
    STATIC_DYNAMIC = 'Static And Dynamic Rendering',
    TAILWIND = 'Tailwing CSS',
    DEFAULT = 'NextJs Tutorial'
}
export interface Character {
    id: string;
    name: string;
    status: string;
    image: string;
    gender: string;
    type: string;
    created: string;
    species: string;
    location: {
        name: string;
    };
}

export interface CharacterResponse {
    characters: {
        info: {
            count: number;
        }
        results: Character[];
    }
}