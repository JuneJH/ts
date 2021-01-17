import { SquareGroup } from './SquareGroup';
import { random } from '../tool/tool';
import { TShape, IPosition } from './../types/types';
import { Square } from './Square';

export class LineShape extends SquareGroup{
    constructor(centerPoint:IPosition,color:string,shape:TShape =[{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:2,y:0}]) {
        super(shape,centerPoint,color)
    }
    rotate(newShape:TShape,exist:Square[]){
        super.rotate(newShape,exist)
    }
}
export class SquareShape extends SquareGroup{
    constructor(centerPoint:IPosition,color:string,shape:TShape = [{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}]) {
        super(shape,centerPoint,color)
    }
    rotate(newShape:TShape){
        return false;
    }
}
export class LShape extends SquareGroup{
    constructor(centerPoint:IPosition,color:string,shape:TShape = [{x:0,y:-1},{x:0,y:0},{x:1,y:0},{x:2,y:0}]) {
        super(shape,centerPoint,color)
    }
    rotate(newShape:TShape,exist:Square[]){
        this._isClockwise = !this._isClockwise;
        super.rotate(newShape,exist)
    }
}
export class LMirrorShape extends SquareGroup{
    constructor(centerPoint:IPosition,color:string,shape:TShape = [{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:1,y:-1}]) {
        super(shape,centerPoint,color)
    }
    rotate(newShape:TShape,exist:Square[]){
        this._isClockwise = !this._isClockwise;
        super.rotate(newShape,exist)
    }
}
export class SShape extends SquareGroup{
    constructor(centerPoint:IPosition,color:string,shape:TShape = [{x:-1,y:-1},{x:-1,y:0},{x:0,y:0},{x:0,y:1}]) {
        super(shape,centerPoint,color)
    }
    rotate(newShape:TShape,exist:Square[]){
        this._isClockwise = !this._isClockwise;
        super.rotate(newShape,exist)
    }
}
export class SMirrirShape extends SquareGroup{
    constructor(centerPoint:IPosition,color:string,shape:TShape = [{x:-1,y:0},{x:-1,y:1},{x:0,y:0},{x:0,y:-1}]) {
        super(shape,centerPoint,color)
    }
    rotate(newShape:TShape,exist:Square[]){
        this._isClockwise = !this._isClockwise;
        super.rotate(newShape,exist)
    }
}
// 
const shapeArr = [LineShape,SquareShape,LShape,LMirrorShape,SShape,SMirrirShape];
const color = ["red","orange","black","yellow","green","pink","blue","lightblue"]

export function createGroupShape(centerPoint:IPosition={x:0,y:0}){
    const is = random(0,shapeArr.length);
    const ic = random(0,color.length);
    return new shapeArr[is](centerPoint,color[ic]);
}
