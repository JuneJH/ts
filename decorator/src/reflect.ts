import "reflect-metadata";

 const key = Symbol.for("descript")

export function propDescript(descript:string){
        return Reflect.metadata(key,descript) 
}


export function printDescript(obj:any){
    const con = obj.__proto__.constructor;
    if(Reflect.hasMetadata(key,con)){
        console.log(Reflect.getMetadata(key,con))
    }else{
        console.log(con.name);
    }
    console.log('\t')
    console.log(Reflect.getMetadata(key,obj,'title'))
    for(let k in obj){
        if(obj.hasOwnProperty(k)){
            const item = Reflect.getMetadata(key,obj,k);
            if(item){
                console.log(`${item}===>${obj[k]}`)
            }else{
                console.log(`${k}===>${obj[k]}`)
            }
        }
    }

}