import { SquareGroup } from './../components/SquareGroup';
export interface IPosition{
    readonly x:number
    readonly y:number
}

// 实现显示类
export interface IShower{
    show:()=>void
    remove:()=>void
}

export type TShape = IPosition[]

export enum Direction {
    left,
    right,
    down,
}

export enum GameStatus{
    gameing,
    gameover,
    gamepause,
    gameWait,
}

export interface GameContainer{
    width:number,
    height:number
}

export interface GameViewer{
    show:(sq:SquareGroup)=>void
    showNext:(sq:SquareGroup)=>void
    showScore:(score:number)=>void
}