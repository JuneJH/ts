"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
function createPoker4enum() {
    const pokers = [];
    Object.values(enum_1.Num).forEach(item => {
        Object.values(enum_1.Color4eum).forEach(ele => {
            pokers.push({
                color: ele,
                num: item,
                getMy() { return this.color + "===" + this.num; }
            });
        });
    });
    const big = {
        types: "大王",
        getMy() { return this.types; }
    };
    const small = {
        types: "小王",
        getMy() { return this.types; }
    };
    pokers.push(big, small);
    return pokers;
}
exports.createPoker4enum = createPoker4enum;
function printPokers4enum(pokers) {
    let str = "\t";
    pokers.forEach((ele, index) => {
        str += ele.getMy();
        if ((index + 1) % 4 == 0) {
            str += '\n\t';
        }
    });
    console.log(str);
}
exports.printPokers4enum = printPokers4enum;
