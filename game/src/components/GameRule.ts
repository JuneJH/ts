import { SquareGroup } from './SquareGroup';
import { gameConfig } from './gameConfig';
import { IPosition, TShape, Direction } from './../types/types';
import { Square } from './Square';
export class GameRule {
    static canIMove(shape:TShape,targePoint:IPosition,exist:Square[]):boolean{
        const result:IPosition[] = shape.map(ele=>{
                return {
                    x:ele.x + targePoint.x,
                    y:ele.y + targePoint.y
                }
        })
        // 判断触底
        let f1 = !result.some(ele=>ele.x < 0 || ele.y < 0 || ele.x >= gameConfig.gamePanel.width || ele.y >= gameConfig.gamePanel.height);
        let f2 = !result.some(it=>exist.some(ele=>it.x === ele.postion.x && it.y === ele.postion.y))
        // console.log(f1,f2)
        return  f1 && f2
    }
    static move(direction:Direction,sq:SquareGroup,exist:Square[]):boolean{
        if(direction === Direction.left){
            if (this.canIMove(sq.shape, {
                x: sq.centerPoint.x - 1,
                y: sq.centerPoint.y
            },exist)) {
                sq.centerPoint = {
                    x: sq.centerPoint.x - 1,
                    y: sq.centerPoint.y
                }
                return true
            }
            return false;
        }else if(direction === Direction.down){
            if (this.canIMove(sq.shape, {
                x: sq.centerPoint.x,
                y: sq.centerPoint.y + 1
            },exist)) {
                sq.centerPoint = {
                    x: sq.centerPoint.x ,
                    y: sq.centerPoint.y + 1
                }
                return true
            }
            return false;
        }else{
            if (this.canIMove(sq.shape, {
                x: sq.centerPoint.x + 1,
                y: sq.centerPoint.y
            },exist)) {
                sq.centerPoint = {
                    x: sq.centerPoint.x + 1,
                    y: sq.centerPoint.y
                }
                return true
            }
            return false;
        }
    }
    static keepMoving(direction:Direction,sq:SquareGroup,exist:Square[]){
        while(this.move(direction,sq,exist));
    }
    /**
     * 触底后消除
     * @param exist
     */
    static remove(exist:Square[]):number{
        const maxY = Math.max(...exist.map(ele=>ele.postion.y));
        const minY = Math.min(...exist.map(ele=>ele.postion.y));
        let count = 0;
        for(let y = minY; y <= maxY; y ++){
            const result = this.findSameLine(exist,y);
            if(result.length === gameConfig.gamePanel.width){
                count ++;
                result.forEach(ele=>ele.shower.remove());
                result.forEach(ele=>{
                    const i = exist.indexOf(ele)
                    if(i != -1){
                        exist.splice(i,1)
                    }
                })
                exist.forEach(ele=>{
                    if(ele.postion.y < y){
                        ele.postion = {
                            x:ele.postion.x,
                            y:ele.postion.y + 1
                        }
                    }
                })
            }
        }
        return count;
    }
    private static findSameLine(exist:Square[],line:number):Square[]{
        return exist.filter(ele=>ele.postion.y === line)
    }
    // 游戏结束
    static gameOver(exist:Square[],target:SquareGroup):boolean{
        return exist.some(ele=>target.squareGroup.some(it=>it.postion.x === ele.postion.x && ele.postion.y === it.postion.y))

    }
}