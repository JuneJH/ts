import { Dog } from './transformer';
import { people } from './validator';

// function d1(){
//     console.log("d1")
//     return function (A:new ()=>void){
//         console.log("d1装饰器");
//     }
// }
// function d2(){
//     console.log("d2");
//     return function (A:new()=>void){
//         console.log("d2装饰器")
//     }
// }
// @d1()
// @d2()
// class A{

// }

import { printDescript, propDescript } from "./reflect";
import { validate, Validator } from 'class-validator';
import { plainToClass } from 'class-transformer';

// @classDescript("用户信息")
// class User{
//     @propDescript("用户")
//     user:string = "";

//     @propDescript("描述")
//     descript:string = "";
// }

// const u = new User();
// u.descript = "这是一名球员";
// u.user = "马赫雷斯"
// printDescript(u)

@propDescript("文章")
class A{
      @propDescript("标题")
        title:string

        @propDescript("副标题")
        titles:string

        @propDescript("正文")
        content:string
    constructor(title:string,titles:string,content:string){
        this.title = title;
        this.titles = titles;
        this.content = content;
    }

}
(A.prototype as any).meta="测试信息"
const a = new A("ECMA组织正式把装饰器纳入规范","ES2021","lorem")

printDescript(a)

console.log("a=>",(a as any).__proto__)



const p = new people();
p.name="sdjlfk"
validate(p).then(err=>{
    console.log(err)
})


const  dogs = [{
    firstName:"旺",
    lastName:'财',
},{
    firstName:"富",
    lastName:"贵"
}]

const d = plainToClass(Dog,dogs);

d.forEach(ele=>{
    console.log(ele.getName())
})