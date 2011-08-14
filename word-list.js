var dict = {q:'a', n:'b', x:'c', k:'d', m:'e', b:'f', z:'g', s:'h', w:'i', t:'j', f:'k', g:'l', d:'m', c:'n', h:'o', r:'p', l:'q', p:'r', v:'s', j:'t'};
var translated = {};

function translate(word) {
  var result = translated[word] || '';
  
  if (result == '') {
    for(i = 0; i < word.length; i++) {
      result += dict[word[i]];
    }
    translated[word] = result;
  }
  return result;
}

function compareWords(a,b) {
  if (a == b) return 0;
  if (translate(a) > translate(b)) return 1;
  return -1;
}

function answer(input) {
  var words = input.split(' ');
  return words.sort(compareWords).join(' ');
}
