function type_check_V1(test, type){
    return typeof(test) == type;
}

console.log(type_check_V1(1,"number"));

function type_check_V2(test, tab){
    var verifType = true;
    var verifValue = true;
    var verifEnum = true;
    if(tab.hasOwnProperty('type')){
        verifType = tab.type == typeof(test);
    }if(tab.hasOwnProperty('value')){
        verifValue = tab.value == test;
    }if(tab.hasOwnProperty('enum')){
        verifEnum = tab.enum.includes(test);
    }
    return verifType == verifValue == verifEnum;
}

console.log(type_check_V2({prop:1},{type:"object"}));
console.log(type_check_V2("foo",{type:"string", value:"foo"}));
console.log(type_check_V2("bar",{type:"string",value:"foo"}));
console.log(type_check_V2(3,{enum:["foo","bar",3]}));

function type_check(arg, obj){
    if(obj.type == typeof(obj)){
        var properties = object.properties;
        for(var property in properties){
            var comp = Object.assign(Object.values(properties[property]));
            console.log(comp);
        }
    }
}
const object = {
    type: "object",
    properties: {
        prop1: {type:"number"},
        prop2: {type:"string",enum:["val1","val2"]},
        prop3: {type:"object",properties:{prop31:"number"}},
        prop4: {type:"array",properties:["boolean"]}}
};
console.log(type_check({prop:1}, object));