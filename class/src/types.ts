import { Deck } from './func';
import { Color4eum, Num } from "./enum";

export interface Card {
    getMy:()=>void
}
export interface Poker4eum extends Card {
    color:Color4eum
    num:Num
}
export interface Joke extends Card{
    types:"大王"|"小王"
}

export type Pokers4enum = Card[];

export interface dealCard{
    player1:Deck
    player2:Deck
    player3:Deck
    left:Deck
    
}