import { getColor } from "../..";
import Card from "../Card";
import * as S from "./style"

const Cards = ({totalPages, pokemons}) => { 
    return (
        <>
        <S.Container>

        {
            pokemons.data?.map((value, key)=>{
                const {darkColor, lightColor} = getColor(value.types[0].type.name)
                return (
                    <Card data={value} key={key} colorLight={lightColor} colorDark={darkColor}/>
                    )
                })
            }
        </S.Container>
        </>
    );
}
 
export default Cards;

