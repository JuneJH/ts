// 设计模式-模板模式
export enum Sex {
    w="女",
    m="男",
    k = "小孩"
}
//
abstract class People {
    name:string="人类"
    age:number = 5000
    sex:Sex = Sex.m
    area:string = "中国"
    // 统一再父类进行模板流程处理，不同的流程通过抽象属性、方法实现
    oneself(){
        console.log("我是一个人");
        console.log(`我今年${this.age}岁老`);
        console.log(`我来自${this.area}`);
        if(this.features()){
            console.log(`你是一个真正得${this.sex}`)
        }else{
            console.log(`你不是一个${this.sex == Sex.m ? Sex.w:Sex.m}`)
        }
    }
    // 利用protected,abstract 强约束子类实现
    protected abstract features():boolean
}

export class  Women extends People {
    protected features(): boolean {
        console.log("我是检测女性朋友得，作为新时代得女性");
        return this.sex === Sex.w
    }
    constructor(
        public name:string,
        public age:number,
        public sex:Sex,
        public area:string

    ) {
        super()
    }
}

export class Men extends People{
    protected features(): boolean {
        console.log("我是来检测你是不是一个纯爷们得,咱是纯爷们");
        return this.sex === Sex.m
    }
    constructor(
        public name:string,
        public age:number,
        public sex:Sex,
        public area:string
    ){
        super()
    }
}

export class Kid extends People{
    protected features(): boolean {
        console.log("小朋友,是祖国未来得花朵");
        return this.sex === Sex.k;
    }
    constructor(
        public name:string,
        public age:number,
        public sex:Sex,
        public area:string
    ){
        super()
    }
}




