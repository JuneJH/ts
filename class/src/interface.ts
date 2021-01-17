
/**
 * 接口
 * 一个马戏团有猴子，老虎，狗，老虎
 * 基本
 */
// 接口可继承类
export interface ISkill{
    skill1:()=>void
    skill2:()=>void
}
export interface ISing{
    sing:(singName:string)=>void
}
type Sex = "公"|"母"
export abstract class Animals{
    abstract name:string
    abstract age:number
    abstract sex:"公"|"母"
    sayHello():void{
        console.log(`大家好，我是${this.name},欢迎来到马戏团`)
    }
}
export class Dog extends Animals{
    name: string
    age: number
    sex: Sex
    constructor(name:string,age:number,sex:Sex){
        super();
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
export class Monkey extends Animals implements ISkill,ISing{
    constructor(
        public name:string,
        public age:number,
        public sex:Sex
    ){
        super();
    }
    sing(singName:string){
        console.log(`大家好，我是${this.name}，给大家带来${singName}`)
    }
    skill2(){
        console.log(this.name +"带来===》实现表现技能2")
    }
    skill1(){
        console.log(this.name+"带来===>","实现表现技能1")
    }
}
export class Lion extends Animals implements ISkill{
    constructor(
        public name:string,
        public age:number,
        public sex :Sex,
    ){
        super();
    }
    skill2(){console.log(this.name+"带来===>","实现表现技能2")}
    skill1(){
        console.log(this.name+"带来===>","实现表现技能1")
    }
}

class A{
    constructor(
        public A1:string,
        public A2:number,
        public A3:boolean,
    ){}
}

class B{
    constructor(
        public B1:any,
        public B2:string,
        public B3:boolean
    ){}
}

interface IAB extends A,B{
    C:string
}

const obj1:IAB = {
    C:"234",
    A1:"继承来自a",
    A2:23,
    A3:false,
    B1:new Array(10),
    B2:"sss",
    B3:!new Boolean()

}
const obj2:A|B = {
    A1:"继承来自a",
    A2:23,
    A3:false,
    B1:new Array(10),
    B2:"sss",
    B3:!new Boolean()
}