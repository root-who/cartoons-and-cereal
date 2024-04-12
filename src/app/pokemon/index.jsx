import * as color from "./style"

const typeColors = [
    {
        type:"fighting",
        lightColor:color.fightingLightColor,
        darkColor:color.fightingDarkColor
    },
    {
        type:"pyschic",
        lightColor:color.psychicLightColor,
        darkColor:color.psychicDarkColor
    },
    {
        type:"poison",
        lightColor:color.poisonLightColor,
        darkColor:color.poisonDarkColor
    },
    {
        type:"dragon",
        lightColor:color.dragonLightColor,
        darkColor:color.dragonDarkColor
    },
    {
        type:"ghost",
        lightColor:color.ghostLightColor,
        darkColor:color.ghostDarkColor
    },
    {
        type:"dark",
        lightColor:color.darkLightColor,
        darkColor:color.darkDarkColor
    },
    {
        type:"ground",
        lightColor:color.groundLightColor,
        darkColor:color.groundDarkColor
    },
    {
        type:"fire",
        lightColor:color.fireLightColor,
        darkColor:color.fireDarkColor
    },
    {
        type:"fairy",
        lightColor:color.fairyLightColor,
        darkColor:color.fairyDarkColor
    },
    {
        type:"water",
        lightColor:color.waterLightColor,
        darkColor:color.waterDarkColor
    },
    {
        type:"flying",
        lightColor:color.flyingLightColor,
        darkColor:color.flyingDarkColor
    },
    {
        type:"normal",
        lightColor:color.normalLightColor,
        darkColor:color.normalDarkColor
    },
    {
        type:"rock",
        lightColor:color.rockLightColor,
        darkColor:color.rockDarkColor
    },
    {
        type:"electric",
        lightColor:color.eletricLightColor,
        darkColor:color.eletricDarkColor
    },
    {
        type:"bug",
        lightColor:color.bugLightColor,
        darkColor:color.bugDarkColor
    },
    {
        type:"grass",
        lightColor:color.grassLightColor,
        darkColor:color.grassDarkColor
    },
    {
        type:"ice",
        lightColor:color.iceLightColor,
        darkColor:color.iceDarkColor
    },
    {
        type:"steel",
        lightColor:color.steelLightColor,
        darkColor:color.steelDarkColor
    },

]

export const getColor = (color) =>{
    const newColor = typeColors.find((value)=>(
        value.type === color
    ))
    // if(!newColor){
    //     return {
    //         type:"steel",
    //         lightColor:color.steelLightColor,
    //         darkColor:"#ff0000"
    //     }
    // }
    return newColor
}