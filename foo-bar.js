var fooChars = ['l','m','h','q','s'];

function isFoo(letter) {
  return fooChars.indexOf(letter) >= 0;
}

function isPrep(word) {
  return word.length == 3 && !isFoo(word[2]) && word.indexOf(fooChars[0]) < 0;   
}

function isVerb(word) {
  return word.length >= 6 && isFoo(word[word.length-1]); 
}

function isFirstPersonVerb(word) {
  return isVerb(word) && isFoo(word[0]);
}

function countWords(input, filter) {
  var words = input.split(' ');
  var i, count = 0;
  for(i = 0; i < words.length; i++) {
    if (filter(words[i])) {
	  count++;
	}  
  }
  return count;
}

function answer(input) {
  return {
	  'prepositions' : countWords(input, isPrep),
	  'verbs' : countWords(input, isVerb),
	  'firstPersonVerbs' : countWords(input, isFirstPersonVerb)
  };
}
