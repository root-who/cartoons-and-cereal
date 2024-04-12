import * as S from "./style"
import { LuSword } from "react-icons/lu";
import { LuShield } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import TYPE from "@/assets/images/eletricType.png"

const Card = ({data, colorDark, colorLight}) => {

    return (
        <>
        <S.Container elevation={5} dark={colorDark} light={colorLight}>
            <S.CardTopCtn>
                <S.PropertiesCtn>
                    <S.PropertyCtn>
                        <LuSword style={{color: "black", fontSize:"20px", fill:"black"}}/>
                        50
                    </S.PropertyCtn>
                    <S.PropertyCtn>
                        <LuShield style={{color: "black", fontSize:"20px", fill:"black"}}/>   
                        40
                    </S.PropertyCtn>
                    <S.PropertyCtn>
                        <LuHeart style={{color: "black", fontSize:"20px", fill:"black"}}/>
                        60
                    </S.PropertyCtn>
                </S.PropertiesCtn>
                <S.PokemonTypeImageCtn>
                    <S.PokemonTypeImage
                        width={200} 
                        height={200} 
                        quality={100}
                        priority
                        unoptimized={true}
                        alt="product"
                        src={TYPE}
                        />
                </S.PokemonTypeImageCtn>
            </S.CardTopCtn>
            <S.CardImageCtn>
                <S.PokemonCardImage
                    shadow={colorLight}
                    width={200} 
                    height={200} 
                    quality={100}
                    priority
                    unoptimized={true}
                    alt="product"
                    src={data.sprites.other["official-artwork"].front_default}
                    />
            </S.CardImageCtn>
            <div style={{display:"flex", flexDirection:"column", alignSelf:"flex-start", rowGap:"10px", color:"#000"}}>
                <span style={{fontSize:"18px", fontWeight:"500"}}>Picachu</span>
                <span style={{fontSize:"14px"}}>Habitat: Forest</span>
                <span style={{fontSize:"14px"}}>Evolution: Raichu</span>
            </div>
        </S.Container>
        </>
    );
}
 
export default Card;