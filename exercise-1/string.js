function ucfirst(string) {
	return string[0].toUpperCase() + string.substring(1);
}

console.log(ucfirst("hello world"));

function capitalize(string) {
	let word = string.split(' ');
	for (let i in word) {
		word[i] = ucfirst(word[i][0]) + word[i].substring(1);
	}
	return word.join(" ");
}

console.log(capitalize("hello world"));

function camelCase(string) {
	if(typeof string === 'string') {
		return capitalize(string).split(" ").join("");	
	}else {
		return "";
	}
}

console.log(camelCase("hello world"));

function snake_case(string) {
	return string.toLowerCase().split(" ").join("_");
}

console.log(snake_case("Hello world"));

function leet(string) {
    string = string.toLowerCase();
	string = string.replace(/a/g, "4");
    string = string.replace(/e/g, "3");
    string = string.replace(/i/g, "1");
    string = string.replace(/o/g, "0");
    string = string.replace(/u/g, "_");
    string = string.replace(/y/g, "7");

	return string;
}

console.log(leet("anaconda") );

function verlan(string) {
	let chaine = string.split(" ");
	for (let i in chaine) {
	    let test = "";
		for(let j in chaine[i]) {
            test = test + chaine[i][chaine[i].length - j - 1];
        }
        chaine[i] = test;
	}
	return chaine.join(" ");
}

console.log(verlan("Hello world"));

function yoda(string){
    return string.split(" ").reverse().join(" ");
}

console.log(yoda("Hello world"));

function vig(input, key) {
    array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    output = "";
    for (var i = 0; i < input.length; i++){
        output += array[(array.indexOf(key[i % key.length]) + array.indexOf(input[i])) % 26];
    }
    return output;
}

console.log(vig("wikipedia", "crypto"));