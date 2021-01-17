import { Length } from "class-validator"


export class people{
    @Length(3,4,{message:"长度必须超过3"})
    name:string
    age:number
    sex:string
}