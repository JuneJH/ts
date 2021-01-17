import { SquareGroup } from '../components/SquareGroup';
import { GameViewer } from './../types/types';
import { SquareShow } from './SquareShow';
import $ from "jquery"
export class GamePageViewer implements GameViewer{
    showScore(score:number){
        $("#show-score").text(score)

    }
    show(sq: SquareGroup){
        sq.squareGroup.forEach(ele => {
            ele.shower = new SquareShow(ele, $("#game_panel"))
        })

    }
    showNext(sq: SquareGroup){
        sq.squareGroup.forEach(ele => {
            ele.shower = new SquareShow(ele, $("#next-square"))
        })
    }

}
