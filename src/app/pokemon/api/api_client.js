import axios from "axios"

export const fetchPokemonUrls = (offset) =>{
    const url=`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    return axios.get(
        url
        )
    .then(response => {
        return response
    })
    .catch(error => {
        return null
    })
}

export async function fetchPokemonData(url){
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(`Erro ao fazer requisição para ${url}: ${error.message}`);
            return null;
        });
}

export async function fetchAllPokemonData(offset){
    try {
        const response = await fetchPokemonUrls(offset);
        const pokemons = response.data.results;
        const pokemonDataList = [];

        await Promise.all(
            pokemons?.map(async (pokemon) => {
                const pokemonData = await fetchPokemonData(pokemon.url);
                if (pokemonData) {
                    pokemonDataList.push(pokemonData);
                }
            })
        );
        return {
            data : pokemonDataList,
            nextPage : response.data?.next
        };
    } catch (error) {
        console.error(`Erro ao obter dados dos Pokemons: ${error.message}`);
        return [];
    }
}
