function takeANumber(line, name) {
  line.push(name);
  return(`Welcome, ${name}. You are number ${line.length} in line.`)
}

function currentLine(line) {
  if(line.length == 0) {
    var temp = 'The line is currrently empty.';
  } else {
    var temp = 'The line is currently:'
    for (i = 1; i <= line.length; i++) {
      temp = temp.concat(` ${i}. ${line[i]},`);
    }
  }
  return temp;
}
