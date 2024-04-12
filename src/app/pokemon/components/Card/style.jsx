import styled from "styled-components";
import Image  from "next/image";
import { Roboto } from 'next/font/google';
import { Paper } from "@mui/material";

const robotoScript = Roboto({ subsets: ['latin'], weight: ["100","300","400","500","700"], display: 'swap'});

export const Container = styled(Paper)`
    width: calc(200px - 20px);
    padding: 15px;
    height: 260px;
    border-radius: 16px;
    background: linear-gradient(to top, ${props=>props.dark}, ${props=>props.light});
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    font-family: ${robotoScript.style.fontFamily};
    cursor: pointer;
`

export const CardTopCtn = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
`

export const PropertiesCtn = styled.div`
    display: flex;
    flex: 1;
    column-gap: 8px;
`
export const PropertyCtn = styled.span`
    color: black;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    align-items: center;
    :hover{
        transform: scale(1.05);
        filter: drop-shadow(1px 1px 2px rgb(255, 255, 255));
    }
`

export const PokemonTypeImageCtn = styled.div`
    display: flex;
    width: 45px;
    height: auto;
    :hover{
        transform: scale(1.1);
        transition: transform 0.5s ease; 
    }
`

export const PokemonTypeImage = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: fill;
    image-rendering: auto;
    
`

export const CardImageCtn = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        transform: scale(1.1);
        transition: transform 0.5s ease; 
    }
`

export const PokemonCardImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: fill;
    image-rendering: auto;
    filter:   drop-shadow(0 4px 8px rgb(255, 242, 0));
    filter: ${props => `drop-shadow(0 4px 8px ${props.shadow})`};
     background: linear-gradient(to top, ${props=>props.dark}, ${props=>props.light});
    
`