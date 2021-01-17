import { Dictionaries } from "./dictionaries";

const dic = new Dictionaries<string,number>();
dic.set("a",123);
dic.set("b",12);
dic.set("c",123);
console.log("读取a的值==",dic.get("a"))
console.log("读取该字典的长度==",dic.size)
console.log("是否存在b===",dic.has("b"));
dic.delete("b")
console.log("读取该字典的长度==",dic.size)
console.log("是否存在b===",dic.has("b"));
