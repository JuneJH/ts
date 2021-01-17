/**
 * 字典
 * 拥有相同的类型的键、相同类型的值
 * 修改一个键的值，如果不存在则添加
 * 查看字典的长度
 * 查看一个键的值
 * 删除一个键
 */
export class Dictionaries<K, V> {
    private keys: K[] = []
    private vals: V[] = []
    set(k:K,v:V){
        const index = this.keys.indexOf(k);
        if(index < 0){
            this.keys.push(k);
            this.vals.push(v);
        }else{
            this.vals[index] = v;
        }
    }
    get(k:K){
        const index = this.keys.indexOf(k);
        if(index < 0){
            return -1;
        }else{
            return this.vals[index]
        }
    }
    get size(){
        return this.keys.length;
    }
    has(k:K){
        return this.keys.includes(k);
    }
    delete(k:K){
        const index = this.keys.indexOf(k);
        if(index < 0){
            return -1;
        }else{
            this.keys.splice(index,1);
            this.vals.splice(index,1);
            return index;
        }
    }
}
