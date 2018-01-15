
//Generate a random word from this list.
//==========================================================
var randomWord = function(){
	var words = ["tarrantula", "obsequious", "factotum", "ridiculous", "conifer", "snowstorm"];
	var wordIndex = Math.floor(Math.random() * words.length);
	return words[wordIndex];
};

module.exports = randomWord;
