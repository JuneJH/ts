import "reflect-metadata";

export class Dog{
    firstName:string
    lastName:string
    getName(){
        return this.firstName + this.lastName;
    }
}
