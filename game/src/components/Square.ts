import { IPosition, IShower } from './../types/types';
// 只处理数据逻辑，不涉及渲染逻辑，暴露扩展
export class Square {
    private _shower?:IShower
    constructor(
        private _postion: IPosition,
        private _color: string,
    ) { }
    set shower (val){
        this._shower = val;
        this._shower.show();
    }
    get shower(){
        return this._shower
    }
    get postion() {
        return this._postion
    }
    set postion(val: IPosition) {
        this._postion = val;
        if(this._shower){
            this._shower.show();
        }
    }
    get color() {
        return this._color;
    }
}