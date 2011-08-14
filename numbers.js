var digits = {q:0, n:1, x:2, k:3, m:4, b:5, z:6, s:7, w:8, t:9, f:10, g:11, d:12, c:13, h:14, r:15, l:16, p:17, v:18, j:19};
var counted = [];

function getWordValue(word) {
  var i, value = 0;
  for (i = 0; i < word.length; i++) {
    value += digits[word[i]] * Math.pow(20,i);
  }
  return value;
}

function answer(input) {
  var count = 0, i, value;
  var words = input.split(' ');
  
  for (i = 0; i < words.length; i++) {
    var word = words[i];
    value = getWordValue(word);
    if (value > 763092 && value % 4 == 0 && counted.indexOf(word) < 0) {
	  count++;
	  counted.push(word);
	}
  }
  return count;
}
