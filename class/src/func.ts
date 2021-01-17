import { Num, Color4eum } from "./enum";
import { Card, dealCard, Joke, Pokers4enum } from "./types";

export class Deck {
    pokers: Card[] = []
    constructor(cards?:Card[]) {
        if(cards){
            this.pokers = cards;
        }else{
            this.init()
        }
    }
    init() {
        Object.values(Num).forEach(item => {
            Object.values(Color4eum).forEach(ele => {
                this.pokers.push({
                    color: ele,
                    num: item,
                    getMy() { return this.color + "===" + this.num }
                } as Card)
            })
        })
        const big: Joke = {
            types: "大王",
            getMy() { return this.types }
        }
        const small: Joke = {
            types: "小王",
            getMy() { return this.types }
        }
        this.pokers.push(big, small)
    }
    print(){
        let str: string = "\t\n";
        this.pokers.forEach((ele, index) => {
            str += "\t"+ele.getMy();
            if ((index + 1) % 4 == 0) {
                str += '\t\n'
            }
        })
        console.log(str)
    }
    shuffle(){
        for(let i = 0; i < this.pokers.length; i ++){
            const ran = this.random(i,this.pokers.length);
            [this.pokers[i],this.pokers[ran]] = [this.pokers[ran],this.pokers[i]]
        }
    }
    deal():dealCard{
        let player1:Deck,player2:Deck,player3:Deck,left:Deck;
        player1 = this.touch(17);
        player2 = this.touch(17);
        player3 = this.touch(17);
        left = this.touch(3);
        return {player1,player2,player3,left}
    }
    private touch(n:number):Deck{
        const deck:Card[] = [];
        for(let i = 0; i < n; i ++){
            deck.push(this.pokers.shift())
        }
        return new Deck(deck);
    }
    private random(min:number,max:number):number{
        return Math.floor(Math.random()*(max-min) + min);
    }
}
