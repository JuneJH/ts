export class ArrayTool<T> {
    array:T[]
    constructor(array:T[]){
        this.array = array
    }
    printf(){
        let str = "\t\n"
        this.array.forEach(ele=>str += ele + "\t")
        console.log(str)
    }
    disorder(){
        for(let i = 0; i < this.array.length; i ++){
            const radom = this.radom(i,this.array.length);
            [this.array[i],this.array[radom]] = [this.array[radom],this.array[i]]
        }

    }
    private radom(max:number,min:number):number{
        return Math.floor(Math.random()*(max-min) + min)
    }

}
export class ArrayToolSon<T> extends ArrayTool<T>{
    array:T[]
    constructor (array:T[]){
        super(array);
    }
    sort(){
    }

}

const arr = new ArrayTool([1,2,3,4,5,6,7,8,9])
arr.disorder();
arr.printf();

const son = new ArrayToolSon(["1","2","3","4","5","6","7","8","9"])
son.disorder();
son.printf();