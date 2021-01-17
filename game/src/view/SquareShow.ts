import { Square } from './../components/Square';
import { IShower } from './../types/types';
import $ from 'jquery'
import { viewConfig } from './viewConfig';
export class SquareShow implements IShower{
    private dom?:JQuery<HTMLElement>
    constructor (
        private square:Square,
        private container:JQuery<HTMLElement>
    ){
    }
    show(){
        if(!this.dom){
            this.dom = $("<div></div>").css({
                position:"absolute",
                width:viewConfig.squareSize.width,
                height:viewConfig.squareSize.height,
                boxSizing:"border-box",
                border:"1px solid #eee"
            }).appendTo(this.container)
        }
        this.dom.css({
            left:this.square.postion.x * viewConfig.squareSize.width,
            top:this.square.postion.y * viewConfig.squareSize.height,
            backgroundColor:this.square.color
        })
    };
    remove(){
        if(this.dom){
            this.dom.remove();
        }
    };
}