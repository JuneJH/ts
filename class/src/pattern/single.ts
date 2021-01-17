/**
 * 单例模式
 * 通过静态类操作私有属性实现
 */
export class Windows{
    public id:string = "001"
    private constructor(
        public name:string,
        private _size:number,
    ){
        Windows._window = this;
    }
    event(){
        console.log(`我是窗口${this.name}`)
    }
    set size(n:number){
        this._size = n;
    }
    get size(){
        return this._size
    }
    private static _window:Windows;
    // 利用静态属性实现单例模式 核心
    static createWindow(name:string,_size:number){
        if(Windows._window){
            return this._window
        }else{
            return new Windows(name,_size);
        }
    }
}