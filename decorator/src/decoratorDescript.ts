export function classDescript(descript:string){
    return function (target:any){
        target.prototype.$calssDescript = descript;
    }
}

export function propDescript(descript:string){
    return function (target:any,propName:string){
        if(!target.$propName){
            target.$propName = []
        }
        target.$propName.push({
            propName:propName,
            descript:descript,
        })
    }
}

export function printDescript(obj:any){
    if(obj.__proto__.$calssDescript){
        console.log(obj.__proto__.$calssDescript)
    }else{
        console.log(obj.__proto__.constructor.name);
    }
    console.log('\t')
    if(!obj.__proto__.$propName){
        obj.__proto__.$propName = []
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            const item = obj.$propName.find((ele:any)=>ele.propName === key);
            if(item){
                console.log(`${item.descript}===>${obj[key]}`)
            }else{
                console.log(`${key}===>${obj[key]}`)
            }
        }
    }

}