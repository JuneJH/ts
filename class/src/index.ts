import { Dog, Lion, Monkey, ISkill, ISing } from './interface';
import { Sex, Women, Men, Kid } from './pattern/template';
import { Deck } from './func';
import { Windows } from './pattern/single';
// const pokers = new Deck();
// pokers.shuffle();
// pokers.print();
// console.log("======发牌前========")
// const result = pokers.deal();
// console.log("=======玩家1=======")
// result.player1.print()
// console.log("=======玩家2=======")
// result.player2.print()
// console.log("=======玩家3=======")
// result.player3.print()
// console.log("=======桌面=======")
// result.left.print()
// console.log("=======本身=======")
// pokers.print();


// const p1 = new Women("张三",32,Sex.m,"中国");
// const p2 = new Men("李四",22,Sex.m,"大明王朝");
// const p3 = new Kid("小王",5,Sex.k,"中华人民共和国")

// p1.oneself();
// p2.oneself();
// p3.oneself();

// const w1 = Windows.createWindow("qq影音",255);
// const w2 = Windows.createWindow("Ev",44);
// console.log(w1 === w2);
// console.log(w1)
// console.log(w2)

const dog = new Dog("旺财",12,"公");
const lion = new Lion("王富贵",22,"公");
const monkey = new Monkey("孙悟空",23,"公");

const anim = [
    dog,
    lion,
    monkey
]
function hasSkill(obj:Object):obj is ISkill{
    if((obj as ISkill).skill1 && (obj as ISkill).skill2){
        return true
    }
    return false;
}
function hasSing(obj:Object):obj is ISing{
    if((obj as ISing).sing){
        return true
    }
}
anim.forEach(ele=>{
    // ele.sayHello();
    if(hasSkill(ele)){
        ele.skill1();
        ele.skill2();
    }
    if(hasSing(ele)){
        ele.sing("《遥远的她》");
    }

})



const o:Object = "123"
console.log(o)

