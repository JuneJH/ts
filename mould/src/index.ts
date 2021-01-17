import { printPokers4enum, createPoker4enum } from "./func";
printPokers4enum(createPoker4enum());



interface User {
    name:string
    age:number
    readonly arr:string[]
}

let u:User ={
    name:'sdf',
    age:12,
    arr:["123"]
}
