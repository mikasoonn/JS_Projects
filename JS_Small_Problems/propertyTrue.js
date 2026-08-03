const nestedObj = {
    a:true,
    b:"hello",
    c: true,
    nested1: {
        d: true,
        e: 0,
        f: "1",
        nested2: {
            g: false,
            h: false,
            i: true,
        }
    }
}

function checkVar1() {
    let count = 0;
    return function func(object){
    for(let i in object){
        if(typeof(object[i]) !== "object"){
            if(typeof(object[i]) == "boolean" && object[i]){
                count++;
            }
        }else{
            func(object[i]);
        }
    }
    return count;
}
}

function checkVar2(object) {
    let count = 0;
    for(let i in object){

        if(typeof(object[i]) !== "object"){
            if(typeof(object[i]) == "boolean" && object[i]){
                count++;
            }
        }else{
            count += checkVar2(object[i]);
        }
    }
    return count;
}

 console.log(checkVar2(nestedObj));
 
 let checkFunc = checkVar1();
 console.log(checkFunc(nestedObj));