import { Num, Color4eum } from "./enum";
import { Pokers4enum } from "./types";

export function createPoker4enum():Pokers4enum{
    const pokers:Pokers4enum = [];
        Object.values(Num).forEach(item=>{
            Object.values(Color4eum).forEach(ele=>{
                pokers.push({
                    color:ele,
                    num:item,
                })
            })
        })
    return pokers;
}

export function printPokers4enum(pokers:Pokers4enum):void{
    let str:string="\t";
    pokers.forEach((ele,index)=>{
       str += ele.color +"===" + ele.num
        if((index+1) % 4 == 0){
            str += '\n\t'
        }
    })
    console.log(str)
}