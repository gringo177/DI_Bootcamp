function add(para1, para2, ){
    return para1 + para2
}
console.log(add);

exports.para1 = ()=>{
    console.log("first Export");
}

exports.para2 = ()=>{
    console.log("Second Export");
}