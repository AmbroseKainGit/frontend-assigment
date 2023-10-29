interface Character {
    id: string;
    name: string;
    status: string;
    image: string;
    gender: string;
    type: string;
    created: string;
    species: string;
}

interface CharacterResponse {
    characters: {
        results: Character[];
    }
}