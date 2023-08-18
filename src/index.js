module.exports = function check(str, bracketsConfig) {
  let openBrackets = [], closeBrackets = [], counter = 0, current = [], stick = 0, similar = [], extra = 0;
  for (let each of bracketsConfig) {
    if (each[0] === each[1]) similar.push(each[0])
    openBrackets.push(each[0]);
    closeBrackets.push(each[1]);
  }
  for (let elem of str) {
    if (openBrackets.includes(elem) && !similar.includes(elem)) {
      counter++;
      current.push(elem);
      continue;
    }
    if (closeBrackets.includes(elem) && !similar.includes(elem)) {
      let ind = openBrackets.indexOf(current[current.length - 1]);
      if (closeBrackets[ind] !== elem) {
        return false;
      }
      else counter--;
      current.pop();
    }
    if (similar.includes(elem)) {
      if (elem !== '7') {
        stick++;
        if (stick % 2 !== 0) {
          current.push(elem);
        }
        else {
          if (elem === current[current.length - 1]) {
            current.pop();
          }
          else return false;
        }
      }
      else {
        extra++;
        if (extra % 2 !== 0) {
          current.push(elem);
        }
        else {
          if (elem === current[current.length - 1]) {
            current.pop();
          }
          else return false;
        }
      }
    }
    if (counter < 0) return false;
  }
  if (counter === 0)return true;
  else return false;
}
