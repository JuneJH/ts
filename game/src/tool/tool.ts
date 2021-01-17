/**
 * 获得一个max-min的整数(向下取整，不取最大)
 * @param max 
 * @param min 
 */
export function random(max:number,min:number){
    return Math.floor(Math.random()*(max-min)+min)
}