import { GameRule } from './GameRule';
import { TShape, IPosition } from './../types/types';
import { Square } from './Square';
export class SquareGroup {
    private _squareGroup:readonly Square[]
    public get squareGroup(){
        return this._squareGroup;
    }
    public set centerPoint(val:IPosition){
        this._centerPoint = val;
        this._shape.forEach((ele,i)=>{
            this.squareGroup[i].postion = {x:ele.x + this._centerPoint.x,y:ele.y + this._centerPoint.y}
        })
    }
    public get centerPoint(){
        return this._centerPoint;
    }
    public get shape(){
        return this._shape
    }
    constructor(
        private _shape:TShape,
        private _centerPoint:IPosition,
        private _color:string
    ){
        const arr:Square[] = []
        this._shape.forEach(ele=>{
            const sq = new Square({x:ele.x + this._centerPoint.x,y:ele.y + this._centerPoint.y},this._color)
            arr.push(sq);
        })
        this._squareGroup = arr;
    }
    protected _isClockwise:boolean = true
    /**
     * 旋转结果
     */
    public rotateResult(){
        let newShape:TShape;
        if(this._isClockwise){
           newShape = this._shape.map(ele=>{
               return {
                   x:-ele.y,
                   y:ele.x
               }
           })
        }else{
            newShape = this._shape.map(ele=>{
                return {
                    x:ele.y,
                    y:-ele.x
                }
            })
        }
        return newShape;
    }
    public rotate(newShape:TShape,exist:Square[]){
        if(GameRule.canIMove(newShape,this._centerPoint,exist)){
            this._shape = newShape
            this._shape.forEach((ele,i)=>{
                this.squareGroup[i].postion = {x:ele.x + this._centerPoint.x,y:ele.y + this._centerPoint.y}
            })
        }
    }
}