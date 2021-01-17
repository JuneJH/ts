type Poker4eum={
    color:Color4eum,
    num:Num
}
enum Num {
    one = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = '6',
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    king = "K",
}
enum Color4eum {
    heart = "♠",
    spade="♥",
    club="♣",
    diamond="♦",
}
type Pokers4enum = Poker4eum[];



function createPoker4enum():Pokers4enum{
    const pokers:Pokers4enum = [];
    Object.keys(Num).forEach(ele=>{
        Object.keys(Color4eum).forEach(item=>{
            pokers.push({
                color:Color4eum[item],
                num:Num[ele],
            })
        })
    })
    return pokers;
}

function printPokers4enum(pokers:Pokers4enum):void{
    let str:string="\t";
    pokers.forEach((ele,index)=>{
       str += ele.color +"===" + ele.num
        if((index+1) % 4 == 0){
            str += '\n\t'
        }
    })
    console.log(str)
}
printPokers4enum(createPoker4enum());