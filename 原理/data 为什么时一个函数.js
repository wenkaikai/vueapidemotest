class Vue{
    constructor(options){
        this.data = options.data();
    }
}
//let data =()=>{a:1};// 这样写 相当于有函数体
let data =()=>({a:1});
let d1 = new Vue({data});
let d2 = new Vue({data});
 d1.data.a = 100;
console.log(d1);//
console.log(d2);// 这样多个对象不串