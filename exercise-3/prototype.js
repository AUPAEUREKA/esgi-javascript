String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.substring(1);
}

console.log("ma chaine".ucfirst());

Object.prototype.prop_access = function(path) {
    var input = this;
    var pathArray = path.split('.');
    for(let i = 0; i< pathArray.length; i++){
        if(input[pathArray[i]] === undefined) {
            console.log("path not exist");
            return null;
        }
        input = input[pathArray[i]];
    }
    return this;
}

console.log(({animal: {type: "dog"}}).prop_access('animal.type'));