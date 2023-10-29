interface Character {
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

interface CharacterResponse {
    characters: {
        results: Character[];
    }
}