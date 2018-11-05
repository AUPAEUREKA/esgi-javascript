function ucfirst(string) {
	return string[0].toUpperCase() + string.substring(1);
}

console.log(ucfirst("hello world"));

function capitalize(string) {
	word = string.split(' ');
	for (var i in word) {
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
	for (var i = 0; i <= string.length; i++) {
		if(string[i] === 'a' || string[i] === 'A'){
			string.replace(i, "4");
		}else if(string[i] === 'e' || string[i] === 'E'){
			string.replace(i, "3");
		}else if(string[i] === 'i' || string[i] === 'I'){
			string.replace(i, "1");
		}else if(string[i] === 'o' || string[i] === 'O'){
			string.replace(i, "0")
		}else if(string[i] === 'u' || string[i] === 'U'){
			string.replace(i, "_")
		}else if(string[i] === 'y' || string[i] === 'Y'){
			string.replace(i, "7")
		}
	}
	return string;
}

console.log(leet("anaconda"));

function verlan(chaine) {
	chaine = chaine.split(" ");
	for (var i = 0; i <= chaine.length; i++) {
		chaine[i] = reverse(chaine[i]);
	}
	return chaine.join(" ");
}

function reverse(chaine) {
	var newChaine = "";
	for(var i = chaine.length - 1; i >=0; i--) {
		newChaine += chaine[i];
	}
	return newChaine;
}

console.log(verlan("hello world"));

function yoda(string){
    return string.split(" ").reverse().join(" ")
}

console.log(yoda("Hello world"));