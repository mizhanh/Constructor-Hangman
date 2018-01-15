
//Letter is shown as an "_" or a letter
//================================================
function Letter(value){
	this.value = value;
	this.show = false;
	if (this.value === ' ') {
		this.show = true;
	};
}

// Put "_" in place of letters 
Letter.prototype.showLetter = function() {
	if (this.show) {
		return this.value;
	} else {
	return "_ ";
	};
}

exports.Letter = Letter;
