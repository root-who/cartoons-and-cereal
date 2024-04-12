import { fetchAllPokemonData } from '@/app/pokemon/api/api_client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const Cards = dynamic(() => import('@/app/pokemon/components/Cards'))


const PokemonCards = ({totalPages, pokemons}) => {
    const router = useRouter();
    const { page } = router.query;


    useEffect(() => {
    if (page) {
        const pageNum = parseInt(page);
        if (isNaN(pageNum) || pageNum <= 0) {
        router.push("/products/?page=1")
        }
    }
    }, [page, router]);
    
    
    return (
        <>
            <div style={{padding:"20px"}}>
                <Cards totalPages={totalPages} pokemons={pokemons}/>
            </div>
        </>
    );
}
 
export default PokemonCards

export const getServerSideProps = (async ({query}) => {
    const currentPage = query.page || 1;
    const totalPages = (1306 / 20);
    const pokemons = await fetchAllPokemonData(currentPage * 20)
    console.log(pokemons)
    return { 
        props: { 
            totalPages : totalPages,
            pokemons : pokemons
        } 
    }
})
